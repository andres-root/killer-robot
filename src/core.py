#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def sandwich():
    return render_template('sandwich.html')

if __name__ == '__main__':
    app.run(debug=True)
