CREATE TABLE public.test (
  "post_id" serial NOT NULL,
  "title" varchar NOT NULL,
  "author" varchar NOT NULL,
  "user_id" bigint NOT NULL,
  "offer" varchar NOT NULL,
  "created_at" date NOT NULL DEFAULT CURRENT_DATE,
  "algorithms" varchar,
  "application" varchar,
  "details" varchar,
  "visibility" varchar NOT NULL,
  PRIMARY KEY ("post_id")
) WITH (
  OIDS=TRUE
);

CREATE TABLE public.post (
  "post_id" serial NOT NULL,
  "title" varchar NOT NULL,
  "author" varchar NOT NULL,
  "user_id" bigint NOT NULL,
  "offer" varchar NOT NULL,
  "created_at" timestamp DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
  "algorithms" varchar,
  "application" varchar,
  "details" varchar,
  "visibility" varchar NOT NULL,
  PRIMARY KEY ("post_id")
) WITH (
  OIDS=TRUE
);
CREATE TABLE public.user (
  "user_id" serial NOT NULL,
  "username" varchar NOT NULL,
  "email" varchar NOT NULL,
  "log_id" varchar NOT NULL,
  PRIMARY KEY ("user_id")
) WITH (
  OIDS=TRUE
);

ALTER TABLE public.post ADD CONSTRAINT "post_fk0" FOREIGN KEY ("user_id") REFERENCES  public.user("user_id");

INSERT INTO public.post VALUES (DEFAULT, 'Google L3 Engineer', 'Harry', 1, '180k', DEFAULT, 'Valid BST, FizzBuzz, ThreeSum', 'Codesmith-Style Application', 'Phone Interview with technical recruiter followed by on-site interview', 'public');
INSERT INTO public.post VALUES (DEFAULT, 'Netflix Senior Software Engineer', 'Sonny', 1, '500k', DEFAULT, 'Num Islands, MergeSort,  ', 'Codesmith-Style Application', '7 rounds of interviews, combination of algorithm questions and system design questions', 'public');
INSERT INTO public.post VALUES (DEFAULT, 'Co-Star Senior Frontend Engineer', 'Kristina', 1, '690k', DEFAULT, 'Fizzbuzz,', 'Codesmith-Style Application', 'On site technical and behavioral interview. Hired on the spot.', 'public');


-- {
--   "date": "2021-11-30T02:44:05.377Z",
--   "type": "mgmt_api_read",
--   "description": "Get a client",
--   "client_id": "VTTlExHT2JqM52hJnmPkYRJY9u6p9Xt7",
--   "client_name": "",
--   "ip": "35.166.202.113",
--   "user_agent": "Chrome 96.0.4664 / Windows 10.0.0",
--   "details": {
--     "accessedSecrets": [
--       "client_secret"
--     ],
--     "request": {
--       "method": "get",
--       "path": "/api/v2/clients/uFDugT69kXMvgEFTXmtx5SVLRt5qfHGH",
--       "query": {},
--       "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
--       "body": null,
--       "channel": "https://manage.auth0.com/",
--       "ip": "35.166.202.113",
--       "auth": {
--         "user": {
--           "user_id": "github|77468545",
--           "name": "harrison.j.nam@gmail.com",
--           "email": "harrison.j.nam@gmail.com"
--         },
--         "strategy": "jwt",
--         "credentials": {
--           "jti": "be12e58a141405295d11e91ab926c44b"
--         }
--       }
--     },
--     "response": {
--       "statusCode": 200,
--       "body": {
--         "client_id": "uFDugT69kXMvgEFTXmtx5SVLRt5qfHGH"
--       }
--     }
--   },
--   "user_id": "github|77468545",
--   "log_id": "90020211130024410422898811132722062524488178305167523842",
--   "_id": "90020211130024410422898811132722062524488178305167523842",
--   "isMobile": false
-- }