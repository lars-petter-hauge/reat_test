FROM python:3.9

WORKDIR /code

RUN pip install fastapi

COPY ./app /code/app

CMD ["fastapi", "run", "app/main.py", "--port", "3000"]
