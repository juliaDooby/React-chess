<!-- ![chessCover](https://github.com/JuliaMiroshnichenko/React-chess/blob/master/cover.jpg) 

[author: @ayunannas] -->

## React-chess-app

 <!-- ![chessScreenshot](https://github.com/juliaDooby/React-chess/blob/master/chessShot.JPG)  -->

<div align="center"><img src="https://github.com/juliaDooby/React-chess/blob/master/chessShot.JPG" width="100%" height="20%"></img></div>

[demo](https://juliadooby.github.io/React-chess/) 
---
### Please note: project code on master branch ((temporarily) 
### - I'll resolve the issue soon, Thanks for understanding !
---

### Technologies Used:

* React
* TypeScript
* Redux
---

### Development stages: 

<!-- 1. Создание ООПшных классов для шахмат. Инициализация клетки шахматной доски
2. Расстановка фигуры
3. Координаты доски. Х Y
4. Логика игры. Подсвечивание доступных для хода клетки
5. canMove. Движение фигур ( Ферзь, слон, ладья )
6. Движение коня и пешки
7. Перезапуск игры. Передача хода
8. Список съеденных фигур. Таймер -->

* Creation of OOP classes for chess. Initializing a chessboard square
* Figure placement
* Board coordinates. X Y
* Game logic. Highlighting moveable cells
* canMove. Movement of pieces (Queen, Bishop, Rook)
* Movement of knight and pawn
* Restart the game. Travel transfer
* List of eaten figures. Timer
---

<!-- ### Modification to do (no need, optional for me):  -->
<!-- ### Что осталось реализовать [в дальнейшем] : 
9. По истечении времени добавить проверку по условию if ( timer < 0 ) { } в таймер, у какого игрока обнулился, 
значит игрок проиграл, вывести на экран "Белые проиграли!" и перезапустить игру  
10. Логика движения короля 
11. Добавить условие для шаха и мата. Метод canMove - проверить, находится ли король под атакой,
определить также как, на какие позиции движется каждая из фигур. 
Смотрим ( target ), если на ( target ) идет атака от любой из фигур, то это шах, и надо подвинуть или защитить короля.
Сделать метод ( isKingUnderAttack ) и добавить < условия > 
12. Добавить условия на < мат >, < на победу > ( у каждой фигуры есть availablePoints , благодаря которым идет определение, куда может идти фигура,
если Король под атакой ( тот же метод isKingUnderAttack )),
если у короля нет свободных полей куда-либо пойти и его нечем защитить ( < высчитать > точки для соседних фигур ), 
то игра закончена, ставится мат 
13. История ходов ( записывать куда-то )
14. Реализовать на < ход вперед >, на < ход назад > ( Undo ), ( Redo ) 
 -->
<!-- * After the time has expired, add a condition check if ( timer < 0 ) { } to the timer, which player has reset,
it means the player lost, display “White lost!” and restart the game
* Logic of the king's movement
* Add a condition for checkmate. canMove method - check if the king is under attack,
determine also how, to what positions each of the figures moves.
We look at (target), if there is an attack on (target) from any of the pieces, then this is check, and the king must be moved or defended.
Make a method ( isKingUnderAttack ) and add <conditions>
* Add conditions for <mate>, <for victory> (each piece has availablePoints, thanks to which it is determined where the piece can go,
if the King is under attack (the same method isKingUnderAttack)),
if the king has no free squares to go anywhere and there is nothing to protect him with (<calculate> points for neighboring pieces),
then the game is over, checkmate
* History of moves (write down somewhere)
* Implement on <move forward>, on <move backward> (Undo), (Redo)  -->

### Instructions for start : 

1. `npm install`
2. `npm start`
