CREATE TABLE public.Post (
  "post_id" serial NOT NULL,
  "message" varchar NOT NULL,
  "password" varchar NOT NULL,
  "user_id" bigint NOT NULL,
  "created_at" timestamp DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
  PRIMARY KEY ("post_id")
) WITH (
  OIDS=TRUE
);

CREATE TABLE public.User (
  "user_id" serial NOT NULL,
  "message" varchar NOT NULL,
  "password" varchar NOT NULL,
  "created_at" timestamp DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
  PRIMARY KEY ("user_id")
) WITH (
  OIDS=TRUE
);

ALTER TABLE public.Post ADD CONSTRAINT "Post_fk0" FOREIGN KEY ("user_id") REFERENCES  public.User("user_id");