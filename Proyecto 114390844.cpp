// Proyecto 1 --== Programa: Juego de Territorio --==
// Andre Rodriguez 24/06/2015

#include <iostream> // librerias
#include <cstdlib> // random?
#include <string> // for strings
#include <ctime> // sets seed for time

// variables globales
int countR;
int countI;
char matrix[9][9];
int test = 2;
std::string player1;
std::string player2;
void instruct();
void doBoard();
void pickR();
void pickO();
void game();
void congrats();
void mCounter();


void instruct() // dispone instrucciones en la pantalla y decide quien comienza
{
    using std::endl;
    std::string x;
    std::string y;
    int first = 0;
    int second = 0;
    unsigned nSecret;
    int ten = 10;
    // displays instructions
    std::cout << "*************~~ Bienvenido al juego de territorio ~~***************\n";
    std::cout << "El juego consiste en encerrar las fichas del adversario de manera horizontal,\n";
    std::cout << "o en cualquiera de las diagonales, cuando el tablero se llene,\n";
    std::cout << "un ganador sera declarado!\n";
    std::cout << "Introduzca su nombre, jugador 1: \n";
    std::getline (std::cin, x);
    std::cout << "Introduzca su nombre, jugador 2: \n";
    std::getline (std::cin, y);
    std::cout << "Tenemos a los jugadores '" << x << "' y '" << y << "\n";
    std::cout << "\nTengo un numero del 1 al 10. El primero que logra adivinarlo comienza el juego.\n";
    srand(time(0));
    nSecret = 1 + rand() % 10;
    while ((nSecret != first) or (nSecret != second)) {
        std::cout << "\nEscoge un numero: " << x << "\n";
        std::cin >> first;
        std::cout << "\nEscoge un numero: " << y << "\n";
        std::cin >> second;
        if ((first > ten) || (second > ten))
            std::cout << "Alguno ingreso un numero mayor a 10. Intente de nuevo\n";
        else;
            if (nSecret == first)
            {
                player1 = x;
                player2 = y;
                std::cout << "\nCorrecto! " << player1 << " comienza el juego con R.\n\n";
                break;
            }
            else if (nSecret == second)
            {
                player1 = y;
                player2 = x;
                std::cout << "\nCorrecto! " << player2 << " comienza el juego con R.\n\n";
                break;
            }
            else if ((nSecret = first) || (nSecret = second))
            {
                std::cout << "Ambos han escogido el numero incorrecto.\n\n";
                continue;
            }
    }
}

void doBoard() // Dispone un tablero en la pantalla
{
    for (int i = 0; i <= 9; i++)
    {
        for (int j = 0; j <= 9; j++)
        {
            if ((matrix[i][j] != 'R') && (matrix[i][j] != 'O'))
            {
                matrix[i][j] = '_';
            }
            std::cout << '|' << matrix[i][j] << '|';
        }
        std::cout << "\n";
    }
}

void pickR() // Toma el movimiento del primer jugador
{
    int columna;
    int fila;
    std::cout << "\n Este es el turno del jugador 1\n";
    std::cout << "\nLas columnas y filas estan enumeradas del 1 al 10.\n";
    std::cout << "Selecciona la columna y fila en donde desea poner su ficha.\n";
    std::cout << "Columna (1-10): ";
    std::cin >> columna;
    std::cout << "Fila (1-10): ";
    std::cin >> fila;
    if ((matrix[columna - 1][fila - 1] == 'R') || (matrix[columna - 1][fila - 1] == 'O'))
    {
        std::cout << "\nEsa casilla esta ocupada.\n\n";
    }
    else if (matrix[columna - 1][fila - 1] == '_')
    {
        std::cout << "\nUna nueva ficha ha sido puesta.\n\n";
        matrix[columna - 1][fila - 1] = 'R';
    }
    else
        std::cout << "Esa casilla no existe.\n\n";
    game();
}

void pickO() // Toma el movimiento del segundo jugador
{
    int columna;
    int fila;
    std::cout << "\n Este es el turno del jugador 2\n";
    std::cout << "\nLas columnas y filas estan enumeradas del 1 al 10.\n";
    std::cout << "Selecciona la columna y fila en donde desea poner su ficha.\n";
    std::cout << "Columna (1-10): ";
    std::cin >> columna;
    std::cout << "Fila (1-10): ";
    std::cin >> fila;
    if ((matrix[columna - 1][fila - 1] == 'R') || (matrix[columna - 1][fila - 1] == 'O'))
    {
        std::cout << "\nEsa casilla esta ocupada.\n";
    }
    else if (matrix[columna - 1][fila - 1] == '_')
    {
       std::cout << "\nUna nueva ficha ha sido puesta.\n";
       matrix[columna - 1][fila - 1] = 'O';
    }
    else
        std::cout << "\Esa casilla no existe.\n";
    game();
}

void game() // verifica si los movimientos encierran alguna ficha o espacio
{
    int i;
    int j;
    for (i = 0; i <= 9; i++)
    {
        for (j = 0; j <= 9; j++)
        {
            // buscar en elementos horizontales
            if (((matrix[i][j-1] == 'R') && (matrix[i][j+1] == 'R')) && (matrix[i][j] != '_'))
            {
                matrix[i][j] = 'R';
            }
            else if (((matrix[i][j-1] == 'O') && (matrix[i][j+1] == 'O')) && (matrix[i][j] != '_'))
            {
                matrix[i][j] = 'O';
            }
            // buscar en elementos verticales
            if (((matrix[i-1][j] == 'R') && (matrix[i+1][j] == 'R')) && (matrix[i][j] != '_'))
            {
                matrix[i][j] = 'R';
            }
            else if (((matrix[i-1][j] == 'O') && (matrix[i+1][j] == 'O')) && (matrix[i][j] != '_'))
            {
                matrix[i][j] = 'O';
            }
            // buscar en elementos diagonales positivos
            if (((matrix[i-1][j-1] == 'R') && (matrix[i+1][j+1] == 'R')) && (matrix[i][j] != '_'))
            {
                matrix[i][j] = 'R';
            }
            else if (((matrix[i-1][j-1] == 'O') && (matrix[i+1][j+1] == 'O')) && (matrix[i][j] != '_'))
            {
                matrix[i][j] = 'O';
            }
            // buscar en elementos diagonales negativos
            if (((matrix[i-1][j+1] == 'R') && (matrix[i+1][j-1] == 'R')) && (matrix[i][j] != '_'))
            {
                matrix[i][j] = 'R';
            }
            else if (((matrix[i-1][j+1] == 'O') && (matrix[i+1][j-1] == 'O')) && (matrix[i][j] != '_'))
            {
                matrix[i][j] = 'O';
            }
        }
    }
}
void mCounter() // cuenta los movimientos en el tablero, si pasan de 100, el juego termina
{
    int counter = 0;
    int i;
    int j;
    for (i = 0; i <= 9; i++)
    {
        for (j = 0; j <= 9; j++)
        {
            if ((matrix[i][j] == 'R') || (matrix[i][j] == 'O'))
            {
                counter++;
            }
        }
    }
    if (counter >= 99)
    {
        test = 1;
    }
    else
        counter = 0;
}

void congrats() // felicita al jugador o declara un empate
{
    int i;
    int j;
    int countR = 0;
    int countI = 0;
    for (i = 0; i <= 9; i++)
    {
        for (j = 0; j <= 9; j++)
        {
            if (matrix[i][j] == 'R')
                countR++;
            else if (matrix[i][j] == 'O')
                countI++;
        }
    }
    if (countR > countI)
        std::cout << "El jugador 1 ha ganado con " << countR << " puntos!\n";
    else if (countR < countI)
    {
        std::cout << "El jugador 2 ha ganado con " << countI << " puntos!\n";
    }
    else
        std::cout << "Tenemos un empate a " << countI << " puntos!\n";
}

main() // emplea un ciclo que se mantiene hasta que se llene el tablero de juego
{
    instruct();
    while (test != 1)
    {
       doBoard();
       pickR();
       mCounter();
       doBoard();
       pickO();
       mCounter();
    }
    std::cout << "\n*****FIN DEL JUEGO******\n";
    congrats();
    return 0;
}
