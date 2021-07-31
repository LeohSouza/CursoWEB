idade = window.prompt('Digite sua idade:')

if(idade < 0)
{
    document.write('Idade invalida!')
}

else if(idade >= 60)
{
    document.write('Idoso!')
}

else if(idade >= 30)
{
    document.write('Adulto !')
}

else if(idade >= 15)
{
    document.write('Jovem !')
}

else if(idade >= 0)
{
    document.write('Criança !')
}