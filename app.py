from flask import Flask, render_template, request

import sqlite3

connection = sqlite3.connect("database.db")
cursor =  connection.cursor()

cursor.execute("create table classes (class_name text, extras integer)")

class_list = [
   ("Paladin", 4),
   ("Barbarian", 3),
   ("Bard",3),
   ("Cleric", 7),
   ("Druid", 3),
   ("Fighter", 3),
   ("Monk", 3),
   ("Ranger", 3),
   ("Rogue", 3),
   ("Sorcerer", 3),
   ("Warlock", 3),
   ("Wizard", 8)

]

cursor.executemany("insert into classes values (?, ?)", class_list)

#print rows
print("****************************")
for row in cursor.execute("select * from classes"):
   print(row)

#specific rows
cursor.execute("select * from classes where class_name =:c", {"c" : "Monk"})
classes_search = cursor.fetchall()
print(classes_search)

connection.close()


app = Flask(__name__)

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/characters.html')
def gallery():
    return render_template('characters.html')

@app.route('/classes.html')
def projects():
    return render_template('classes.html')

@app.route('/resources.html')
def extra():
    return render_template('resources.html')

@app.route('/gallery.html')
def contact():
    return render_template('gallery.html')

@app.route('/enternew')
def new_student():
   return render_template('student.html')

if __name__ == '__main__':
 app.run(debug = True)




