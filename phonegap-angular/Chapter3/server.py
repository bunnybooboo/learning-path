import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

import pymongo
from bson.objectid import ObjectId
from tornado_cors import CorsMixin
from tornado.options import define, options
import json
define("port", default=8000, help="run on the given port", type=int)

class Application(tornado.web.Application):
    def __init__(self):
        handlers = [(r"/todos", Todos)]
        conn = pymongo.MongoClient("localhost")
        self.db = conn["todos"]
        settings = dict(
            xsrf_cookies=False,
            debug=True
        )
        tornado.web.Application.__init__(self, handlers, **settings)

class Todos(CorsMixin, tornado.web.RequestHandler):
    CORS_ORIGIN = '*'
    CORS_METHODS = 'POST,GET,OPTIONS'
    CORS_HEADERS = 'Origin, X-Requested-With, Content-Type, Accept, content-type'
    CORS_MAX_AGE = 1728000
    CORS_CREDENTIALS = False
    def get(self):


        Todos = self.application.db.todos
        todo_id = self.get_argument("id", None)

        if todo_id:
            todo = Todos.find_one({"_id": ObjectId(todo_id)})
            todo["_id"] = str(todo['_id'])
            self.write(todo)
        else:
            todos = Todos.find()
            result = []
            data = {}
            for todo in todos:
                todo["_id"] = str(todo['_id'])
                result.append(todo)
            data['todos'] = result
            self.write(data)

    def options(self):

        todo_id = self.get_argument("id", None)
        Todos = self.application.db.todos
        #if self.request['Access-Control-Request-Method'] == 'POST':
        self.set_header("Access-Control-Allow-Headers", "content-type")

    def post(self):
        data = json.loads(self.request.body)

        Todos = self.application.db.todos
        todo_id = self.get_argument("id", None)

        if todo_id:
            # perform an edit
            todo = Todos.find_one({"_id": ObjectId(todo_id)})

            # here should perform the update...
            todo['text'] = data['text']
            todo['details'] = data['details']
            todo['done'] = data['done']
            Todos.save(todo)
            # cos _id is not JSON serializable.
            todo["_id"] = str(todo['_id'])
            self.write(todo)
        else:
            data = json.loads(self.request.body)
            todo = {
                'text': data['text'],
                'details': data['details'],
                'done': data['done']
            }

            a = Todos.insert(todo)

            # cos _id is not JSON serializable.

            todo['_id'] = str(a)
            self.write(todo)

def main():
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(Application())
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()

if __name__ == "__main__":
    main()
