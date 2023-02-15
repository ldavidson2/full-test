from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
from pydantic import BaseModel


app = FastAPI()
dynamodb = boto3.resource('dynamodb', region_name="us-east-2",
         aws_access_key_id="AKIAX3FHVXYSKFFYPGE7",
         aws_secret_access_key= "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")
table = dynamodb.Table('fulltestdb-staging')

def lambda_handler(event, contect):
    response = table.get_item(
        Key={
            'PK': 'COMP#0',
            'SK': 'COMP#0'
        }
    )
    print(response)
    return {
        'statusCode': 200,
        'body': response
    }