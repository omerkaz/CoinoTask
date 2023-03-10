# PROJECT : Coino TEST CASE

## Table of contents

- [Screenshot](#screenshot)
- [Link](#link)
- [Libraries-Tools](#libraries-tools)
- [Project Skeleton ](#project-skeleton)
- [Testing Content](#testing-content)
- [Author](#author)

## Screenshot

<p align="center">
<img  src="https://i.ibb.co/3fJHB1V/indir.png" alt="screenshot">
</p>

## Link

- [Live Website](https://shopify-gules.vercel.app/)

## Libraries-Tools

- reduxtoolkit
- reduxjs
- redux-persist
- react router
- react testing library
- jest
- react icons
- yup
- formik
- scss
- axios
- react-i18next
- react-notifications-component
- use-local-storage

## Project Skeleton

```

.eslintignore
.eslintrc.json
.gitignore
.prettierignore
README.md
craco.config.js
tsconfig.json
package-lock.json
package.json
prettierrc.json
public
   |-- favicon.ico
   |-- index.html
   |-- locales
   |   |-- en
   |   |   |-- translation.json
   |   |-- tr
   |   |   |-- translation.json
   |-- manifest.json
   |-- robots.txt
src
   |-- App.tsx
   |-- api
   |   |-- index.ts
   |   |-- products.ts
   |-- assets
   |   |-- fonts
   |   |-- images
   |   |-- styles
   |-- components
   |   |-- Carousel
   |   |   |-- Carousel.module.scss
   |   |   |-- Carousel.test.tsx
   |   |   |-- Carousel.tsx
   |   |   |-- __snapshots__
   |   |   |   |-- Carousel.test.tsx.snap
   |   |-- DropdownMenu
   |   |-- Modal
   |   |-- ProductCard
   |   |-- SubscribeForm
   |-- i18n.ts
   |-- index.tsx
   |-- layout
   |   |-- Footer.module.scss
   |   |-- Footer.tsx
   |   |-- Layout.module.scss
   |   |-- Layout.tsx
   |   |-- Navbar.module.scss
   |   |-- Navbar.tsx
   |-- pages
   |   |-- Cart
   |   |   |-- Cart.module.scss
   |   |   |-- Cart.tsx
   |   |-- Checkout
   |   |-- Favorites
   |   |-- Home
   |   |-- Products
   |-- react-app-env.d.ts
   |-- setupTests.ts
   |-- store
   |   |-- cart
   |   |-- favorites
   |   |-- hooks.ts
   |   |-- index.ts
   |-- types
   |   |-- components.ts
   |   |-- index.ts
   |   |-- store.ts
   |-- utils
   |   |-- notifications.ts
   |   |-- yup.ts

```

## Testing Content

- Testing some components renders correctly

<p align="center">
<img  src="https://i.ibb.co/4fhrNHm/Screenshot-3.png" alt="screenshot">
</p>

## Rapor

Merhaba,  ??r??n responsive de??il ve baz?? yerlerde scss kodlar?? biraz messy fark??nday??m, responsive ??zelli??ini ekseriyetle UI k??t??phanesi kullanarak giderdi??im i??in ve challenge kriterleri aras??nda olmad?????? i??in herhangi bir aksiyon sergilemedim. Dark Mode/Light Mode'un basit bir aksiyona sahip olmas??ndan ??t??r?? "use-local-storage" paketini kulland??m ve bunun i??in top level'dan redux'??n ??a????r??lmas??n?? istemedim. Elimden geldi??ince solid yazmaya ??al????t??m, yazamad??????m k??s??mlar??n ise fark??nday??m daha fazla zaman ay??rarak dizayn edilmesi gerekilen noktalar oldu??u i??in -saat 23:51- baz?? noktalarda m??hendisli??i b??rak??p developer olarak devam ettim maalesef :). Typescript'i bu kadar iyi kulland??????m ilk proje oldu -sevmeye ba??lad??m-. Kriterler aras??nda yer almasa da iki adet test yazd??m ve buraya sonu??lar??n?? koydum. Her kim okuyorsa iyi g??nler diliyorum.

## Author

- Author - ??mer KAZ

<center> &#8987; Happy Coding  &#9997; </center>
