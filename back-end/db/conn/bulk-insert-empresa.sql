USE API_AES
SELECT MUNICIPIO, count(*) as numero FROM EMPRESA group by MUNICIPIO order by count(*) desc