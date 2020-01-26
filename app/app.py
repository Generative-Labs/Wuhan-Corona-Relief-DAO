from flask import Flask
from flask import request,jsonify
from flask import render_template, url_for, flash, redirect, g,send_from_directory,session
from collections import defaultdict
# from falsk_sqlalchemy import falsk_sq
import random
import os
import uuid
from dbTest import connect_db, get_db
app = Flask(__name__)
app.secret_key = 'development key'

@app.teardown_appcontext
# Not sure if it should be used like this
def close_db(error):
    if hasattr(g, 'postgres_db_cur'):
        g.postgres_db_cur.close()
    if hasattr(g, 'postgres_db_cunn'):
        g.postgres_db_conn.close()

######## load info page ######################
@app.route("/get_needs", methods=['GET','POST'])
# insert the ugc needs into the db
def get_needs():
    db = get_db()
    req_data = request.get_json()
    hos_name = req_data['hos_name']
    hos_address = req_data['hos_address']
    contact_name = req_data['contact_name']
    contact_tel = req_data['contact_tel']
    need = req_data['need']
    amount = req_data['amount']
    comment = req_data['comment']
    url = req_data['url']
    db.execute("""insert into  wuhan_hospital_info (hos_name, hos_address) VALUES (%s,%s)""",[hos_name,hos_address])   


@app.route("/post_needs",methods=['GET','POST'])
# post needs from the db
def post_needs():
    db = get_db()
    db.execute('''select * from wuhan_hospital_req where need!= 'NaN' order by id ASC''')
    demand = db.fetchall()
    need_json =defaultdict(list)
    result = defaultdict(list)
    status = defaultdict(int)
    hos_name_use = set()
    for row in demand:
        need_json[row[1]].append(row[2])
        if row[6]!='捐助认领中':
            status[row[1]] +=1
    # print(status)
    for row in demand:
        if row[1] not in hos_name_use:
            result['response'].append({"hos_name":row[1],"needs":need_json[row[1]],"status":(status[row[1]])/len(need_json[row[1]]),"trust_level": "预估可信度"})
            hos_name_use.add(row[1])

        # demand_json['response'].append({'hos_name':row[1],'need':row[2],'status':row[6],'trust_level':"暂不可用"})
    # print(demand_json)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug = True)


# @app.route("/post_needs_group_hos",methods=['GET','POST'])
# # post needs from the db
# def post_needs_group_hos():
#     db = get_db()
#     db.execute('''select * from wuhan_hospital_req where need!= 'NaN' order by id ASC''')
#     demand = db.fetchall()
#     demand_json =defaultdict(list)
#     for row in demand:
#         demand_json[row[1]].append({'id':row[0],'need':row[2],'amount':row[3],'comment':row[4],'update_amount':row[5],'status':row[6]})
#     # print(demand_json)
#     return jsonify(demand_json)