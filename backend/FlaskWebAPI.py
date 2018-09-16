from flask import Flask
app = Flask(__name__)

from flask import g, jsonify, request
import sqlite3
import json
import random

from sklearn.externals import joblib
from sklearn.feature_extraction.text import CountVectorizer

DATABASE = "/home/project/myproject/myproject.db"


# Get the database if it is not connected
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db


@app.route('/', methods=['GET', 'POST'])
def index():
    # get the sqlite3 database cursor
    c = get_db().cursor()

    print("starting.....")

    if request.method == "POST":

        print("request accepted")

        # from whom
        uid = request.args.get("uid")

        print("uid loaded")

        # record the message
    
        message = request.args.get('message')
        print(''.join(request.data))
        print("message loaded")

        
        import pandas as pd 
        import json

        tweets_data_path = 'tweetdata.txt'

        tweets_data = []
        tweets_file = open(tweets_data_path, "r")

        for line in tweets_file:
            try:
                tweet = json.loads(line)
                tweets_data.append(tweet)
            except:
                continue
    
    
        # calculate the score
        sent = pd.read_excel('sentiment2.xlsx')
        #print(sent.head())
        #print(sent['id'])
        #print(len(sent))

        x = []
        y = []
        for i in range(len(tweets_data)):
            if tweets_data[i]['id']==sent['id'][i]:
                x.append(tweets_data[i]['text'])
                y.append(sent['sentiment'][i])
        #print(x[0].split(" "))
        #print(y[0])



        from sklearn.naive_bayes import MultinomialNB
        from sklearn.feature_extraction.text import CountVectorizer
        from sklearn import metrics

        vectorizer = CountVectorizer(stop_words='english')
        train_features = vectorizer.fit_transform(x)

        actual = y[:-500]



        nb = MultinomialNB()
        nb.fit(train_features, [int(r) for r in y])

        test_features = vectorizer.transform(x[:-500])


        test_try= vectorizer.transform(["Can we all stop treating anxiety like it's a choice and something cool to have thank you"]) 
        test_try2= vectorizer.transform([str(message)])
        print(message)
        #predict2 = nb.predict(test_try)
        #predict3 = nb.predict(test_try2)

        #print(predict2)
        predictions = nb.predict(test_features)

        fpr, tpr, thresholds = metrics.roc_curve(actual, predictions, pos_label=1)
        print("Multinomial naive bayes AUC: {0}".format(metrics.auc(fpr, tpr)))

        #print(predict2)
        #print(predict3)


        #from sklearn.neighbors import KNeighborsClassifier

        #model = KNeighborsClassifier(n_neighbors=5)
        #model.fit(train_features, [int(r) for r in y])
        #print(model.predict(test_try))
        score = str(nb.predict(test_try2).item(0))

        print("score = " + score)

        # insert into the table
        query = c.execute("INSERT INTO messages VALUES (?,?,?);", (uid, message, score))
        
        print("query finished")


        # return the score
        return jsonify(score=score)

    else: # else GET request
        # query the top score
        query = c.execute("SELECT * FROM messages ORDER BY score ASC LIMIT 1;")
        result = query.fetchone()

        # return as json
        return jsonify(uid=result[0],message=result[1], score=result[2])
     

    
if __name__ == "__main__":
    app.run(host='0.0.0.0')

