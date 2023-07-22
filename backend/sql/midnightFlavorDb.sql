DROP DATABASE IF EXISTS `midnightFlavorDb`;
CREATE DATABASE `midnightFlavorDb`;
USE `midnightFlavorDb`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `hashedPassword` varchar(255) NOT NULL
);

DROP TABLE IF EXISTS `cocktail`;
CREATE TABLE `cocktail` (
  `cocktail_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `spirit` varchar(255),
  `ingredients` varchar(255),
  `method` TEXT
);

INSERT INTO `user` (`name`, `email`, `hashedPassword`)
VALUES 
  ('Valere', 'valerie.apert@example.com', '$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ'),
  ('Alice', 'alice.johnsie@example.com', '$argon2id$v=19$m=16,t=2,p=1$emVmemVmemZlemZ6ZnpmZQ$eSetR6KPUNAGW+q+wDadcw'),
  ('Robert', 'robert.brown@example.com', '$argon2id$v=19$m=16,t=2,p=1$emVmemVmemZlemZ6ZnpmZXphZGF6ZGQ$a0bg5DZB6H6v3jjQC81DXg'),
  ('Sophie', 'sophie.garcia@example.com', '$argon2id$v=19$m=16,t=2,p=1$emVmemVmemZlenplZHpkZnpmemZlemFkYXpkZA$V1qAnJDyMuuWG7g9yoGYXA'),
  ('Maxime', 'maxime.dubois@example.com', '$argon2id$v=19$m=16,t=2,p=1$emVmemVmemZlenplZHpkZGZ6ZnpmZXphZGF6ZGQ$VCzq45PL9t8khtc44Kk5iw'),
  ('Julia', 'julia.lee@example.com', '$argon2id$v=19$m=16,t=2,p=1$emVmemVmemVmemZlenplZHpkZGZ6ZnpmZXphZGF6ZGQ$UKaGZ9hGFn/S5SBQDMe/Uw'),
  ('Alexandre', 'alexandre.moreau@example.com','$argon2id$v=19$m=65536,t=5,p=1$6F4WFjpSx9bSq9k4lp2fiQ$cjVgCHF/voka5bZI9YAainiaT+LkaQxfNN638b/h4fQ'),
  ('Laura', 'laura.sanchez@example.com', '$argon2id$v=19$m=65536,t=5,p=1$6F4WFjpSx9bSq9k4lp2fiQ$cjVgCHF/voka5bZI9YAainiaT+LkaQxfNN638b/h4fQ');

INSERT INTO `cocktail` (`name`, `spirit`, `ingredients`, `method`)
VALUES
  ('Mojito', 'Rum', 'White rum, mint leaves, lime juice, simple syrup, soda water', 'Muddle mint leaves and lime juice, add rum and simple syrup, top with soda water.'),
  ('Old Fashioned', 'Whiskey', 'Bourbon, sugar cube, Angostura bitters, water, orange twist', 'Muddle sugar and bitters, add bourbon and water, garnish with orange twist.'),
  ('Cosmopolitan', 'Vodka', 'Vodka, triple sec, cranberry juice, lime juice', 'Shake all ingredients with ice, strain into a chilled cocktail glass.'),
  ('Margarita', 'Tequila', 'Tequila, triple sec, lime juice, salt', 'Rim glass with salt, shake ingredients with ice, strain into glass.'),
  ('Negroni', 'Gin', 'Gin, Campari, sweet vermouth', 'Stir all ingredients with ice, strain into a rocks glass with ice, garnish with orange peel.'),
  ('Martini', 'Gin', 'Gin, dry vermouth, olive or lemon twist', 'Stir gin and vermouth with ice, strain into a chilled martini glass, garnish with olive or lemon twist.'),
  ('Daiquiri', 'Rum', 'White rum, simple syrup, lime juice', 'Shake all ingredients with ice, strain into a chilled cocktail glass.'),
  ('Mai Tai', 'Rum', 'Dark rum, white rum, lime juice, orange curaçao, orgeat syrup', 'Shake all ingredients with ice, strain into a glass filled with crushed ice, garnish with mint and cherry.'),
  ('Pina Colada', 'Rum', 'White rum, coconut cream, pineapple juice', 'Blend all ingredients with ice until smooth, pour into a chilled glass, garnish with pineapple wedge.'),
  ('Screwdriver', 'Vodka', 'Vodka, orange juice', 'Pour vodka into a glass with ice, top with orange juice, stir gently.'),
  ('White Russian', 'Vodka', 'Vodka, coffee liqueur, heavy cream', 'Fill glass with ice, add vodka and coffee liqueur, top with heavy cream, stir gently.'),
  ('Tom Collins', 'Gin', 'Gin, lemon juice, simple syrup, club soda', 'Shake gin, lemon juice, and syrup with ice, strain into a Collins glass with ice, top with club soda, garnish with lemon slice.'),
  ('Mint Julep', 'Whiskey', 'Whiskey, simple syrup, fresh mint leaves', 'Muddle mint leaves and syrup, add bourbon and crushed ice, stir until the glass becomes frosty, garnish with mint sprigs.'),
  ('Caipirinha', 'Cachaça', 'Cachaça, lime, sugar', 'Muddle lime and sugar in a glass, add cachaça and ice, stir well.'),
  ('Gimlet', 'Gin', 'Gin, lime juice, simple syrup', 'Shake all ingredients with ice, strain into a chilled cocktail glass.'),
  ('Bellini', 'Prosecco', 'Prosecco, peach puree', 'Pour peach puree into a chilled champagne flute, top with Prosecco, stir gently.'),
  ('Aperol Spritz', 'Aperol', 'Aperol, Prosecco, soda water, orange slice', 'Fill a wine glass with ice, add Aperol and Prosecco, top with soda water, garnish with orange slice.'),
  ('Mimosa', 'Prosecco', 'Prossecco, orange juice', 'Pour orange juice into a champagne flute, top with Champagne.'),
  ('Rossini', 'Prosecco', 'Prosecco, strawberry puree', 'Pour strawberry puree into a chilled champagne flute, top with Prosecco, stir gently.'),
  ('French 75', 'Gin', 'Gin, lemon juice, simple syrup, Prosecco', 'Shake gin, lemon juice, and simple syrup with ice, strain into a chilled champagne flute, top with Prosecco, garnish with lemon twist.'),
  ('Dark and Stormy', 'Rum', 'Dark rum, ginger beer, lime wedge', 'Fill a highball glass with ice, pour dark rum, top with ginger beer, garnish with a lime wedge.'),
  ('Moscow Mule', 'Vodka', 'Vodka, ginger beer, lime juice, mint sprig', 'Fill a copper mug with ice, add vodka and lime juice, top with ginger beer, garnish with mint sprig.'),
  ('Whiskey Sour', 'Whiskey', 'Bourbon, lemon juice, simple syrup, lemon slice', 'Shake bourbon, lemon juice, and simple syrup with ice, strain into a rocks glass with ice, garnish with lemon slice.'),
  ('Prosecco Punch', 'Prosecco', 'Prosecco, orange juice, cranberry juice, triple sec, fresh fruit slices', 'In a punch bowl, combine Prosecco, orange juice, cranberry juice, and triple sec. Add fresh fruit slices for garnish.'),
  ('Gin Fizz', 'Gin', 'Gin, lemon juice, simple syrup, club soda', 'Shake gin, lemon juice, and simple syrup with ice, strain into a highball glass with ice, top with club soda.'),
  ('Prosecco Punch', 'Prosecco', 'Prosecco, orange juice, cranberry juice, triple sec, fresh fruit slices', 'In a punch bowl, combine Prosecco, orange juice, cranberry juice, and triple sec. Add fresh fruit slices for garnish.'),
  ('Painkiller', 'Rum', 'Dark rum, coconut cream, pineapple juice, orange juice, nutmeg', 'Shake all ingredients with ice, pour into a chilled glass, garnish with freshly grated nutmeg.'),
  ('Espresso Martini', 'Vodka', 'Vodka, coffee liqueur, freshly brewed espresso, simple syrup, coffee beans', 'Shake all ingredients with ice, strain into a chilled martini glass, garnish with coffee beans.'),
  ('Manhattan', 'Whiskey', 'Whiskey, sweet vermouth, Angostura bitters, Maraschino cherry', 'Stir whiskey, sweet vermouth, and bitters with ice, strain into a chilled cocktail glass, garnish with a Maraschino cherry.'),
  ('Daiquiri Sour', 'Rum', 'White rum, lemon juice, simple syrup, egg white', 'Shake all ingredients with ice, strain into a chilled cocktail glass, garnish with a lemon twist.'),
  ('Watermelon Vodka Slush', 'Vodka', 'Vodka, watermelon chunks, lime juice, simple syrup', 'Blend all ingredients with ice until smooth, pour into a chilled glass, garnish with a watermelon slice.'),
  ('Boulevardier', 'Whiskey', 'Bourbon, Campari, sweet vermouth', 'Stir all ingredients with ice, strain into a rocks glass with ice, garnish with an orange twist.'),
  ('Spritz Veneziano', 'Prosecco', 'Prosecco, Aperol, soda water, orange slice', 'Fill a wine glass with ice, add Aperol and Prosecco, top with soda water, garnish with an orange slice.'),
  ('Bramble', 'Gin', 'Gin, blackberry liqueur, lemon juice, simple syrup, blackberries', 'Fill a rocks glass with crushed ice, pour gin and blackberry liqueur, top with lemon juice and simple syrup, garnish with blackberries.'),
  ('Tequila Sunrise', 'Tequila', 'Tequila, orange juice, grenadine, orange slice, maraschino cherry', 'Fill a highball glass with ice, pour tequila and orange juice, top with grenadine, garnish with an orange slice and a maraschino cherry.'),
  ('Piña Colada Fizz', 'Rum', 'White rum, coconut cream, pineapple juice, soda water', 'Fill a highball glass with ice, pour rum, coconut cream, and pineapple juice, top with soda water, stir gently.'),
  ('Black Russian', 'Vodka', 'Vodka, coffee liqueur', 'Pour vodka and coffee liqueur into a rocks glass with ice, stir gently.'),
  ('Whiskey Smash', 'Whiskey', 'Bourbon, lemon wedges, simple syrup, fresh mint leaves', 'Muddle lemon wedges and mint leaves in a rocks glass, add bourbon and simple syrup, fill with crushed ice, stir until the glass becomes frosty, garnish with a mint sprig.'),
  ('Fizzy Peach Bellini', 'Prosecco', 'Prosecco, peach nectar, peach schnapps', 'Pour peach nectar and peach schnapps into a champagne flute, top with Prosecco, stir gently.'),
  ('Paloma', 'Tequila', 'Tequila, grapefruit soda, lime juice, salt', 'Rub the rim of a glass with salt, fill the glass with ice, add tequila and lime juice, top with grapefruit soda, stir gently, garnish with a lime wedge.');