create table occupation(chb_id number(5), cli_id number, jour date, NB_pass number,rexive number(1));
INSERT INTO occupation VALUES (1, 1, TO_DATE('1995-01-02','YYYY-MM-DD'), 2, 0);
INSERT INTO occupation VALUES (1, 67, TO_DATE('1999-01-02','YYYY-MM-DD'), 2, 0);
INSERT INTO occupation VALUES (1, 1, TO_DATE('1999-04-02','YYYY-MM-DD'), 2, 0);
INSERT INTO occupation VALUES (1, 1, TO_DATE('1999-05-13','YYYY-MM-DD'), 2, 0);
INSERT INTO occupation VALUES (1, 1, TO_DATE('1999-05-18','YYYY-MM-DD'), 2, 1);
INSERT INTO occupation VALUES (1, 1, TO_DATE('2001-12-22','YYYY-MM-DD'), 2, 1);
INSERT INTO occupation VALUES (1, 67, TO_DATE('2013-01-02','YYYY-MM-DD'), 2, 0);
INSERT INTO occupation VALUES (1, 1, TO_DATE('2013-01-02','YYYY-MM-DD'), 2, 0);

set autocommit off;

update OCCUPATION
SET jour = TO_DATE('2013-01-02','YYYY-MM-DD') WHERE chb_id = 1 and cli_id = 67 ;