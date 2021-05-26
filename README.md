# Домашнее задание №3 по курсу React от Гикбрейнс.

Студент: Антонова

## Задания:

1. Сверстать мессенджер, выделив явно поле для сообщений и визуально разделив сообщения от пользователя и ответы робота.
2. Добавить возможность ввода текста сообщения и его отправки:
сообщение должно отправляться либо по нажатию кнопки в интерфейсе, либо по нажатию Enter на клавиатуре;
поле ввода должно очищаться при отправке сообщения.
3. Подключить Material-UI и сделать с его помощью верстку поля ввода, кнопки отправки сообщения.
4. Создать новые компоненты: Layout, ChatList и Header.
Layout должен быть вверху приложения (подключаться в index.jsx), а ChatList, Header и MessageField внутри него;
Header должен быть вверху Layout и занимать всю ширину;
ChatList и MessageField должны быть расположены рядом друг с другом ниже Header так, чтобы Message Field занимал большую часть (например, 30 % на 70 %);
ChatList должен только визуально отражать список из 3–5 чатов (назовите их как угодно) и пока не несет никакой функциональности. Переключение между чатами реализовывать не нужно;
Для верстки ChatList использовать List из Material-UI.
5. *Исправить баг, который возникает, если отправить сообщение и, не дожидаясь ответа от робота, начать печатать что-то в поле ввода.
