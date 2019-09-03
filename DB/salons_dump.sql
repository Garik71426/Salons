--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-1.pgdg18.04+1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(15) NOT NULL,
    description character varying(250) NOT NULL,
    img character varying(50)
);


ALTER TABLE public.category OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: salon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.salon (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    address character varying(30) NOT NULL,
    phone character varying(15) NOT NULL,
    mobile_phone character varying(15),
    email character varying(63) NOT NULL,
    info character varying(255),
    img character varying(50)
);


ALTER TABLE public.salon OWNER TO postgres;

--
-- Name: salon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.salon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.salon_id_seq OWNER TO postgres;

--
-- Name: salon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.salon_id_seq OWNED BY public.salon.id;


--
-- Name: salon_worker_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.salon_worker_category (
    worker_id integer NOT NULL,
    category_id integer NOT NULL,
    salon_id integer NOT NULL
);


ALTER TABLE public.salon_worker_category OWNER TO postgres;

--
-- Name: social; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.social (
    id integer NOT NULL,
    name character varying(15) NOT NULL
);


ALTER TABLE public.social OWNER TO postgres;

--
-- Name: social_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.social_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.social_id_seq OWNER TO postgres;

--
-- Name: social_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.social_id_seq OWNED BY public.social.id;


--
-- Name: social_worker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.social_worker (
    worker_id integer NOT NULL,
    social_id integer NOT NULL,
    path character varying(100) NOT NULL
);


ALTER TABLE public.social_worker OWNER TO postgres;

--
-- Name: worker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.worker (
    id integer NOT NULL,
    name character varying(15) NOT NULL,
    surname character varying(20) NOT NULL,
    b_day date NOT NULL,
    img character varying(50) NOT NULL,
    about character varying(255)
);


ALTER TABLE public.worker OWNER TO postgres;

--
-- Name: worker_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.worker_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.worker_id_seq OWNER TO postgres;

--
-- Name: worker_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.worker_id_seq OWNED BY public.worker.id;


--
-- Name: workers_works; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workers_works (
    worker_id integer NOT NULL,
    img character varying(50) NOT NULL
);


ALTER TABLE public.workers_works OWNER TO postgres;

--
-- Name: works; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.works (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    price numeric NOT NULL,
    "time" numeric NOT NULL,
    category_id integer,
    CONSTRAINT works_price_check CHECK ((price > (0)::numeric)),
    CONSTRAINT works_work_time_check CHECK (("time" > (0)::numeric))
);


ALTER TABLE public.works OWNER TO postgres;

--
-- Name: works_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.works_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.works_id_seq OWNER TO postgres;

--
-- Name: works_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.works_id_seq OWNED BY public.works.id;


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: salon id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon ALTER COLUMN id SET DEFAULT nextval('public.salon_id_seq'::regclass);


--
-- Name: social id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social ALTER COLUMN id SET DEFAULT nextval('public.social_id_seq'::regclass);


--
-- Name: worker id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.worker ALTER COLUMN id SET DEFAULT nextval('public.worker_id_seq'::regclass);


--
-- Name: works id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works ALTER COLUMN id SET DEFAULT nextval('public.works_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, name, description, img) FROM stdin;
1	Վարսահարդարում	Գեղեցկությունն ամենուր է, հույժ ցանկալի հյուր է։	static/assets/images/section/vars.jpg
2	Դիմահարդարում	Գեղեցկությունը ձիրք ու զորություն ունի սրտերը խաղաղություն մտցնելու։	static/assets/images/section/dim.jpg
3	Մատնահարդարում	Մարդու մեջ պետք է ամեն ինչ գեղեցիկ լինի։	static/assets/images/section/mat.jpg
4	Կոսմետոլոգիա	Գեղեցիկն աստվածային է, վեհը՝ մարդկային։	static/assets/images/section/spa.jpg
\.


--
-- Data for Name: salon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.salon (id, name, address, phone, mobile_phone, email, info, img) FROM stdin;
3	Սյուզի գեղեցկության սրահ	Տիգրան Մեծ 74	+37498526478	\N	SyuziBeautySalon@mail.ru	Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։ Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ, որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ	/static/assets/images/salon/salon1.jpg
4	Լիլիթ գեղեցկության սրահ	Գր․ Լուսավորիչ 42	+37443501024	\N	lilitSalon@mail.ru	Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։ Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ, որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ	/static/assets/images/salon/salon2.jpg
5	Փարվանա գեղեցկության սրահ	Նժդեհի 25	+37432243525	\N	ParvanaBeautySalon@mail.ru	Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։ Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ, որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ	/static/assets/images/salon/salon3.jpg
6	Կոկետ գեղեցկության սրահ	Մյասնիկյան 64	+37432250581	\N	Koket64@mail.ru	Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։ Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ, որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ	/static/assets/images/salon/salon4.jpg
7	Անժելիկա գեղեցկության սրահ	Մյասնիկյան 26/4	+37432247455	\N	Anjelika_Gexeckutyan_Srah@mail.ru	Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։ Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ, որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ	/static/assets/images/salon/salon5.jpg
8	Անի գեղեցկության սրահ	Վարդանանց 14	+37432225683	\N	AniGexeckutyanSrah@gmail.com	Մեր գեղեցկության սրահը գործում է Վանաձորում դեռևս 2007թ-ից ։ Մեր հավատարիմ և մշտական գործնկերներն են  մի շարք աշխարահրջակ ընկերություններ, որոնցից են Bell Cosmetics,Gity Cosmetics, Gity Cosmetics և այլ ընկերություններ	/static/assets/images/salon/salon6.jpg
\.


--
-- Data for Name: salon_worker_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.salon_worker_category (worker_id, category_id, salon_id) FROM stdin;
1	1	3
30	3	7
2	1	3
3	1	3
10	1	3
4	2	3
5	3	3
6	4	3
7	4	3
8	1	4
9	1	4
3	1	4
10	1	4
11	2	4
12	3	4
13	4	4
14	1	5
15	2	5
16	2	5
17	3	5
18	3	5
19	4	5
20	4	5
21	1	6
22	2	6
23	2	6
24	2	6
25	4	6
26	1	7
27	1	7
28	2	7
29	3	7
31	1	8
32	1	8
33	3	8
34	4	8
\.


--
-- Data for Name: social; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.social (id, name) FROM stdin;
1	Facebook
3	Instagram
2	Twitter
5	Vk
\.


--
-- Data for Name: social_worker; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.social_worker (worker_id, social_id, path) FROM stdin;
1	1	https://www.facebook.com
2	3	https://www.instagram.com
4	1	https://www.facebook.com/2
5	2	https://www.twitter.com/3
6	2	https://www.twitter.com/4
6	1	https://www.facebook.com/4
7	3	https://www.instagram.com/5
9	3	https://www.instagram.com/7
9	1	https://www.facebook.com/7
11	2	https://www.twitter.com/9
12	1	https://www.facebook.com/10
13	3	https://www.instagram.com/11
14	3	https://www.instagram.com/12
15	1	https://www.facebook.com/13
15	2	https://www.twitter.com/13
16	2	https://www.twitter.com/14
16	3	https://www.instagram.com/14
17	3	https://www.instagram.com/15
17	1	https://www.facebook.com/15
18	1	https://www.facebook.com/16
18	2	https://www.twitter.com/16
18	3	https://www.instagram.com/16
19	1	https://www.facebook.com/17
20	3	https://www.instagram.com/19
21	3	https://www.instagram.com/20
21	2	https://www.twitter.com/20
21	1	https://www.facebook.com/20
22	2	https://www.twitter.com/21
22	3	https://www.instagram.com/21
23	3	https://www.instagram.com/22
24	2	https://www.twitter.com/23
25	3	https://www.instagram.com/25
25	2	https://www.twitter.com/26
25	1	https://www.facebook.com/26
27	1	https://www.facebook.com/27
28	3	https://www.instagram.com/28
29	1	https://www.facebook.com/29
29	2	https://www.twitter.com/29
29	3	https://www.instagram.com/29
\.


--
-- Data for Name: worker; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.worker (id, name, surname, b_day, img, about) FROM stdin;
1	Լիլիթ	Կարապետյան	1987-02-21	/static/assets/images/users/specialist.png	Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Մոսկվայում 
2	Անուշ	Վարդանյան	1989-01-12	/static/assets/images/users/specialist.png	Ունեմ 2 տարվա աշխատանքային փորձ
3	Հասմիկ	Չիլինգարյան	1989-01-12	/static/assets/images/users/specialist.png	Ունեմ 2 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Պեկինում
4	Հայկուհի	Կարապետյան	1984-06-12	/static/assets/images/users/specialist.png	Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ ԱՄՆ-ում 
5	Սիրարփի	Հայրապետյան	1994-08-01	/static/assets/images/users/specialist.png	Ունեմ 3 տարվա աշխատանքային փորձ,վերապատրաստվել եմ Երևանում 
6	Մանե	Իսահակյան	1991-09-05	/static/assets/images/users/specialist.png	Ունեմ 5 տարվա աշխատանքային փորձ,վերապատրաստվել եմ Վրաստանում 
7	Աննա	Հարությունյան	1987-05-25	/static/assets/images/users/specialist.png	Ունեմ 8 տարվա աշխատանքային փորձ,վերապատրաստվել եմ Իտալիայում
8	Հակոբ	Աբաղյան	1985-07-27	/static/assets/images/users/specialist.png	Ունեմ 10 տարվա աշխատանքային փորձ
9	Հրաչիկ	Հովսեփյան	1990-10-27	/static/assets/images/users/specialist.png	Ունեմ 5 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Երևանում 
10	Հասմիկ	Չիլինգարյան	1995-11-12	/static/assets/images/users/specialist.png	Ունեմ 2 տարվա աշխատանքային փորձ
11	Սիրակ	Կարապետյան	1985-12-16	/static/assets/images/users/specialist.png	Ունեմ 8 տարվա աշխատանքային փորձ
12	Անի	Մամուլյան	1994-01-16	/static/assets/images/users/specialist.png	վերապատրաստվել եմ Մոսկվայում 
13	Անաստասիա	Մամուլյան	1990-02-18	/static/assets/images/users/specialist.png	ՈՒնեմ 4 տարվա աշխատանքային փորձ
14	Աննա	Կարապետյան	1985-03-21	/static/assets/images/users/specialist.png	Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Ալժիրում 
15	Նունե	Խաչատրյան	1985-04-02	/static/assets/images/users/specialist.png	Ունեմ 10 տարվա աշխատանքային փորձ
16	Վարդուհի	Ղազարյան	1995-05-09	/static/assets/images/users/specialist.png	Ունեմ 3 տարվա աշխատանքային փորձ, վերապատրաստվել եմ ԱՄՆ-ում 
17	Գոհար	Բաբելյան	1994-06-08	/static/assets/images/users/specialist.png	Ունեմ 4 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Մոսկվայում 
18	Մարիամ	Պապյան	1987-07-11	/static/assets/images/users/specialist.png	Ունեմ 9 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Մոսկվայում 
19	Արմինե	Բաբայան	1992-08-15	/static/assets/images/users/specialist.png	Ունեմ 4 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Հունաստանում 
20	Կարինե	Մուրադյան	1990-09-26	/static/assets/images/users/specialist.png	Ունեմ 6 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Իսպանիայում 
21	Կարապետ	Հովակիմյան	1995-10-21	/static/assets/images/users/specialist.png	Ունեմ 1 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Հնդկաստանում 
22	Լուսինե	Խաչատրյան	1975-10-29	/static/assets/images/users/specialist.png	Ունեմ 15 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Գերմանիայում 
23	Էմա	Ադամյան	1987-10-06	/static/assets/images/users/specialist.png	վերապատրաստվել եմ Անգորայում 
24	Մերի	Խառատյան	1980-11-13	/static/assets/images/users/specialist.png	Ունեմ 15 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Ավստրիայում 
25	Կարինե	Հարությունյան	1994-11-30	/static/assets/images/users/specialist.png	Ունեմ 3 տարվա աշխատանքային փորձ
26	Տիգրան	Քոչինյան	1996-12-31	/static/assets/images/users/specialist.png	Վերապատրաստվել եմ Գվինեայում
27	Գարիկ	Իսկանդարյան	1988-12-01	/static/assets/images/users/specialist.png	Ունեմ 8 տարվա աշխատանքային փորձ
28	Անահիտ	Կառյան	1996-12-13	/static/assets/images/users/specialist.png	Ունեմ 8 տարվա աշխատանքային փորձ
29	Ինեսա	Մկրտչյան	1990-12-17	/static/assets/images/users/specialist.png	Ունեմ 8 տարվա աշխատանքային փորձ
30	Էրիկ	Պապյան	1987-10-08	/static/assets/images/users/specialist.png	Ունեմ 8 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Թալիանդում 
31	Կարեն	Կարապետյան	1985-09-06	/static/assets/images/users/specialist.png	Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Ինդոնեզիայում 
32	Գոռ	Վարդանյան	1987-08-19	/static/assets/images/users/specialist.png	Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Իրանում 
33	Ամալյա	Կիրակոսյան	1994-07-23	/static/assets/images/users/specialist.png	Ունեմ 10 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Մոսկվայում 
34	Նունե	Հայրապետյան	1994-12-28	/static/assets/images/users/specialist.png	Ունեմ 3 տարվա աշխատանքային փորձ, վերապատրաստվել եմ Երևանում 
\.


--
-- Data for Name: workers_works; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.workers_works (worker_id, img) FROM stdin;
1	/static/assets/images/works/work.jpg
2	/static/assets/images/works/work1.jpg
\.


--
-- Data for Name: works; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.works (id, name, price, "time", category_id) FROM stdin;
1	Ֆեն	2000	20	1
2	Մանիկյուր	1000	15	3
\.


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 4, true);


--
-- Name: salon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.salon_id_seq', 8, true);


--
-- Name: social_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.social_id_seq', 5, true);


--
-- Name: worker_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.worker_id_seq', 34, true);


--
-- Name: works_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.works_id_seq', 2, true);


--
-- Name: category category_category_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_category_name_key UNIQUE (name);


--
-- Name: category category_img_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_img_key UNIQUE (img);


--
-- Name: category category_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_name_key UNIQUE (name);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: salon salon_address_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon
    ADD CONSTRAINT salon_address_key UNIQUE (address);


--
-- Name: salon salon_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon
    ADD CONSTRAINT salon_email_key UNIQUE (email);


--
-- Name: salon salon_img_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon
    ADD CONSTRAINT salon_img_key UNIQUE (img);


--
-- Name: salon salon_mobile_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon
    ADD CONSTRAINT salon_mobile_phone_key UNIQUE (mobile_phone);


--
-- Name: salon salon_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon
    ADD CONSTRAINT salon_name_key UNIQUE (name);


--
-- Name: salon salon_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon
    ADD CONSTRAINT salon_phone_key UNIQUE (phone);


--
-- Name: salon salon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon
    ADD CONSTRAINT salon_pkey PRIMARY KEY (id);


--
-- Name: salon_worker_category salon_worker_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon_worker_category
    ADD CONSTRAINT salon_worker_category_pkey PRIMARY KEY (worker_id, category_id, salon_id);


--
-- Name: social social_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social
    ADD CONSTRAINT social_name_key UNIQUE (name);


--
-- Name: social social_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social
    ADD CONSTRAINT social_pkey PRIMARY KEY (id);


--
-- Name: social_worker social_worker_path_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social_worker
    ADD CONSTRAINT social_worker_path_key UNIQUE (path);


--
-- Name: social_worker social_worker_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social_worker
    ADD CONSTRAINT social_worker_pkey PRIMARY KEY (worker_id, social_id);


--
-- Name: worker worker_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.worker
    ADD CONSTRAINT worker_pkey PRIMARY KEY (id);


--
-- Name: workers_works workers_works_img_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workers_works
    ADD CONSTRAINT workers_works_img_key UNIQUE (img);


--
-- Name: works works_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_name_key UNIQUE (name);


--
-- Name: works works_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_pkey PRIMARY KEY (id);


--
-- Name: salon_worker_category salon_worker_category_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon_worker_category
    ADD CONSTRAINT salon_worker_category_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- Name: salon_worker_category salon_worker_category_salon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon_worker_category
    ADD CONSTRAINT salon_worker_category_salon_id_fkey FOREIGN KEY (salon_id) REFERENCES public.salon(id);


--
-- Name: salon_worker_category salon_worker_category_worker_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon_worker_category
    ADD CONSTRAINT salon_worker_category_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES public.worker(id);


--
-- Name: social_worker social_worker_social_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social_worker
    ADD CONSTRAINT social_worker_social_id_fkey FOREIGN KEY (social_id) REFERENCES public.social(id);


--
-- Name: social_worker social_worker_worker_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social_worker
    ADD CONSTRAINT social_worker_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES public.worker(id);


--
-- Name: workers_works workers_works_worker_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workers_works
    ADD CONSTRAINT workers_works_worker_fkey FOREIGN KEY (worker_id) REFERENCES public.worker(id);


--
-- Name: works works_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_category_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- PostgreSQL database dump complete
--

