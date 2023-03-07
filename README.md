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

Merhaba,  ürün responsive değil ve bazı yerlerde scss kodları biraz messy farkındayım, responsive özelliğini ekseriyetle UI kütüphanesi kullanarak giderdiğim için ve challenge kriterleri arasında olmadığı için herhangi bir aksiyon sergilemedim. Dark Mode/Light Mode'un basit bir aksiyona sahip olmasından ötürü "use-local-storage" paketini kullandım ve bunun için top level'dan redux'ın çağırılmasını istemedim. Elimden geldiğince solid yazmaya çalıştım, yazamadığım kısımların ise farkındayım daha fazla zaman ayırarak dizayn edilmesi gerekilen noktalar olduğu için -saat 23:51- bazı noktalarda mühendisliği bırakıp developer olarak devam ettim maalesef :). Typescript'i bu kadar iyi kullandığım ilk proje oldu -sevmeye başladım-. Kriterler arasında yer almasa da iki adet test yazdım ve buraya sonuçlarını koydum. Her kim okuyorsa iyi günler diliyorum.

## Author

- Author - Ömer KAZ

<center> &#8987; Happy Coding  &#9997; </center>
