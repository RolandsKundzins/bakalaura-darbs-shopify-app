# LV - Bakalaura darba Shopify lietotne

Šis projekts tiek lietots pētnieciskajai daļai bakalaura darbā "SPRAUDŅU IZSTRĀDE VAIRĀKĀM E-KOMERCIJAS PLATFORMĀM: IEGUVUMI, IZAICINĀJUMI UN IESPĒJAS UZLABOŠANAI".

Veidojot šo lietotni, galvenais mērķis ir pārbaudīt tieši Shopify platformas spējas, nevis pārlieku pievērst uzmanību sarežģītas uzņēmējdarbības loģikas izpratnei un implementācijai, jo šo aspektu ieviešana būtu līdzvērtīga risinājumam, kas veidots no pamatiem, neizmantojot Shopify. Noskaidrosim arī tehnisko rīku izmantošanas iespējas un ērtumu priekš izstrādātāja.

## Lietotnes palaišana
- Komandrindā palaist komandu:
  ```
  shopify app dev
  ```
- Iekš faila Checout.jsx nepieciešams nomainīt servera adreses mainīgo "SERVER_URL" (Shopify diemžēl nepiedāvā vides mainīgos maksājumu soļa saskarnes paplašinājumiem)

# ENG - Bachelors work Shopify app

This project is used for investigatory part of bachelors work "DEVELOPMENT OF PLUGINS FOR MULTIPLE E-COMMERCE PLATFORMS: BENEFITS, CHALLENGES, AND OPPORTUNITIES FOR IMPROVEMENT".

When creating this app, the main goal is to test the capabilities of the Shopify platform, rather than focusing too much on understanding and implementing complex business logic, as implementing these aspects would be equivalent to a solution built from scratch without using Shopify. We will also clarify the possibilities of using technical tools and the convenience for the developer.

## Launching the Application
- Run the command in the terminal:
  ```
  shopify app dev
  ```
- Inside the Checkout.jsx file, you need to replace the server address variable "SERVER_URL" (unfortunately, Shopify does not provide environment variables for Checkout UI Extensions).
