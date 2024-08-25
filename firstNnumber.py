# def prinNNumber(n):
#     if n==0:
#         return
#     print(n)
#     prinNNumber(n-1)
#     return

# prinNNumber(5)

#################################finboanci

def fibo(n):

    if n==0 or n==1:
        return(1)
    return(n+fibo(n-1))

print(fibo(10))