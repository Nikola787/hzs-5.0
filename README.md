# Rad u timu na React aplikaciji

## Setapovanje projekta

**Kako bismo setapovali react aplikaciju, potrebno je da uradimo par stvari:**

1 . kloniramo github repozitorijum na **lokalnu masinu:**

`git clone https://github.com/filipstev/fon-hakaton`

2 . ulazimo u direktorjium fon-hakaton-a:

`cd fon-hakaton`

3 . instaliramo potrebne dependency-je za react:

`npm install`

### **Rad na sajtu:**

Bilo bi dobro da svako od nas napravi granu na kojoj ce raditi (grana se pravi komandom `git checkout -b "naziv grane"`). Nazivi grana mogu biti: "landing", "o hakatonu", "partneri"... Kada napravimo granu, na master grani ce se menjati samo po potrebi, **npr:** Treba da se izmeni globalni css, push-ujemo na master granu kako bi css mogao da se primeni kod svih.

Kada kloniramo i setapujemo projekat, svako od nas bi trebalo da napravi folder u `src\components` kao naziv stranice na kojoj radi. **npr:** Filip radi na stranici "o-hakatonu", Filip ce napraviti folder `o-hakatonu` i u njega ce ubacivati sve komponente vezane za njegov deo posla.

## Bonus

Kada u buducnosti sami budete pravili react aplikacije, upalicete terminal na vasem racunaru (Command Prompt na Windowsu) , oticicete na lokaciju gde zelite da vam se napravi folder sa datom aplikacijom (npr. desktop) i upisacete komandu **`npx create-react-app ime-aplikacije`**
