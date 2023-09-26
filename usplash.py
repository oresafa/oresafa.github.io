import requests
url=f'https://unsplash.com/collections/b5ae975d5a7b23349dd0cc88bf512941/photos?client_id=Hs-Nv_Rdn_FuUjioPZl5nAeYq_iKz96HYTwJWzqXazw 
response=requests.get(url)
data= response.json() 
print(url)