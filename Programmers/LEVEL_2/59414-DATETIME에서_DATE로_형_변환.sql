-- datetime 형변환

SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d') 
AS 날짜 
FROM ANIMAL_INS

