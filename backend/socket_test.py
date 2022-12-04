from flask import Flask
from random import randint
app = Flask(__name__)
# Route for seeing a data
@app.route('/main')
def get_time():
    mph = randint(0,100)
    return {
    "MPH":mph,
    "turn_direction":"left",
}
      
# Running app
if __name__ == '__main__':
    app.run()


# import socketio

# socket = socketio.Server()
# app = socketio.WSGIApp(socket)

# @socket.event
# def connect(sid):
#     print(sid, "Connected")
    
# @socket.event
# def disconnect(sid):
#     print(sid,"Disconnected")