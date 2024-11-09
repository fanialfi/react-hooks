# react costom hooks

untuk penamaan custom hooks, namanya harus diawali dengan kata `use` lalu diikuti dengan huruf kapital,
seperti `useState`, `useEffect` (built-in) atau `useOnlineStatus` (custom),

sebuah custom hooks juga bisa mengembalikan sebuah arbitrary value ataupun juga bisa tidak mengembalikan arbitrary value

jika di sebuah project ada linter yang dikonfigurasi untuk project react, ketika mengganti custom hooks `useOnlineStatus` menjadi `getOnlineStatus` linter tidak akan mengizinkan pemanggilan `useState` dan `useEffect`.
Hal ini akan membantu developer untuk membedakan mana yang custom hooks dan mana yang bukan
