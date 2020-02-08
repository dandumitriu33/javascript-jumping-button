from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('question-with-one-answer.html')


@app.route('/the-question')
def the_question():
    if request.method == 'GET':
        question = request.args.get('question')
        answer = request.args.get('answer')
        print(question, answer)
        return render_template('the-question.html',
                               question=question,
                               answer=answer)
    else:
        return render_template('question-with-one-answer.html')


if __name__ == "__main__":
    app.run(debug=True)
