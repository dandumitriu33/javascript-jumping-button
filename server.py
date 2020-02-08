from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('question-with-one-answer.html')


@app.route('/the-question')
def the_question():

    return render_template('the-question.html')


if __name__ == "__main__":
    app.run(debug=True)
