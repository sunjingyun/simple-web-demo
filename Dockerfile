FROM node:10-alpine

ENV CODE_DIR /code/

RUN mkdir -p $CODE_DIR

COPY . $CODE_DIR

WORKDIR $CODE_DIR

EXPOSE 8080

CMD ["node", "index.js"]

