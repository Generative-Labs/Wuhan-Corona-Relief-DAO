from flask import g
import sqlite3
import os
dbpath = os.getcwd() + '/sqlite/video.db'
import psycopg2
from psycopg2.extras import DictCursor


filename = 'DataCollection.sql'

def connect_db(RowMode=True):
    # conn = psycopg2.connect(uri, cursor_factory = DictCursor)

    conn = psycopg2.connect("host='118.31.226.79' dbname='postgres' user='postgres' password='postgres' port='5432'")
    conn.autocommit = True
    sql = conn.cursor()
    return conn, sql

def get_db():
    db = connect_db()

    if not hasattr(g, 'postgres_db_conn'):
        g.postgres_db_conn = db[0]
    if not hasattr(g, 'postgres_db_cur'):
        g.postgres_db_cur = db[1]

    return g.postgres_db_cur

def init_db():
    db = connect_db()

    db[1].execute(open(filename,'r').read())
    db[1].close()

    db[0].close()

