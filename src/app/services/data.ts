const bdInitialAssignments = [
   { "id": 1, "dateDeRendu": "11/23/2021", "nom": "Nathalie", "rendu": true },
   { "id": 2, "dateDeRendu": "6/17/2022", "nom": "Sheffie", "rendu": true },
   { "id": 3, "dateDeRendu": "2/14/2022", "nom": "Gerome", "rendu": true },
   { "id": 4, "dateDeRendu": "11/29/2021", "nom": "Rakel", "rendu": false },
   { "id": 5, "dateDeRendu": "8/1/2022", "nom": "Bili", "rendu": true },
   { "id": 6, "dateDeRendu": "7/14/2022", "nom": "Hurleigh", "rendu": false },
   { "id": 7, "dateDeRendu": "9/5/2022", "nom": "Thaddus", "rendu": false },
   { "id": 8, "dateDeRendu": "7/2/2022", "nom": "Gerald", "rendu": true },
   { "id": 9, "dateDeRendu": "11/4/2022", "nom": "Lurette", "rendu": true },
   { "id": 10, "dateDeRendu": "9/9/2022", "nom": "Mellisent", "rendu": true },
   { "id": 11, "dateDeRendu": "6/5/2022", "nom": "Drona", "rendu": false },
   { "id": 12, "dateDeRendu": "1/11/2022", "nom": "Kort", "rendu": true },
   { "id": 13, "dateDeRendu": "10/24/2022", "nom": "Xenia", "rendu": true },
   { "id": 14, "dateDeRendu": "3/5/2022", "nom": "Nichole", "rendu": true },
   { "id": 15, "dateDeRendu": "4/7/2022", "nom": "Arleen", "rendu": false },
   { "id": 16, "dateDeRendu": "7/19/2022", "nom": "Kristen", "rendu": false },
   { "id": 17, "dateDeRendu": "9/8/2022", "nom": "Farrand", "rendu": false },
   { "id": 18, "dateDeRendu": "10/8/2022", "nom": "Pammi", "rendu": false },
   { "id": 19, "dateDeRendu": "6/8/2022", "nom": "Stillman", "rendu": true },
   { "id": 20, "dateDeRendu": "1/23/2022", "nom": "Gerhardt", "rendu": true },
   { "id": 21, "dateDeRendu": "6/25/2022", "nom": "Fayre", "rendu": true },
   { "id": 22, "dateDeRendu": "3/17/2022", "nom": "Avram", "rendu": true },
   { "id": 23, "dateDeRendu": "6/7/2022", "nom": "Waldemar", "rendu": false },
   { "id": 24, "dateDeRendu": "5/14/2022", "nom": "Andy", "rendu": true },
   { "id": 25, "dateDeRendu": "5/2/2022", "nom": "Frants", "rendu": false },
   { "id": 26, "dateDeRendu": "9/15/2022", "nom": "Vivia", "rendu": true },
   { "id": 27, "dateDeRendu": "10/5/2022", "nom": "Velma", "rendu": false },
   { "id": 28, "dateDeRendu": "11/12/2022", "nom": "Vivi", "rendu": false },
   { "id": 29, "dateDeRendu": "2/28/2022", "nom": "Andee", "rendu": false },
   { "id": 30, "dateDeRendu": "1/24/2022", "nom": "Kimball", "rendu": false },
   { "id": 31, "dateDeRendu": "6/23/2022", "nom": "Gaylene", "rendu": true },
   { "id": 32, "dateDeRendu": "7/11/2022", "nom": "Lauren", "rendu": false },
   { "id": 33, "dateDeRendu": "5/12/2022", "nom": "Karissa", "rendu": false },
   { "id": 34, "dateDeRendu": "11/10/2021", "nom": "Pattie", "rendu": false },
   { "id": 35, "dateDeRendu": "3/31/2022", "nom": "Ring", "rendu": false },
   { "id": 36, "dateDeRendu": "9/12/2022", "nom": "Ambrosius", "rendu": true },
   { "id": 37, "dateDeRendu": "8/23/2022", "nom": "Albert", "rendu": true },
   { "id": 38, "dateDeRendu": "12/26/2021", "nom": "Rosina", "rendu": true },
   { "id": 39, "dateDeRendu": "1/7/2022", "nom": "Leanor", "rendu": true },
   { "id": 40, "dateDeRendu": "1/28/2022", "nom": "Frederick", "rendu": true },
   { "id": 41, "dateDeRendu": "7/8/2022", "nom": "Cookie", "rendu": false },
   { "id": 42, "dateDeRendu": "11/5/2022", "nom": "Nikkie", "rendu": true },
   { "id": 43, "dateDeRendu": "11/25/2021", "nom": "Evelin", "rendu": true },
   { "id": 44, "dateDeRendu": "11/1/2022", "nom": "Corbie", "rendu": true },
   { "id": 45, "dateDeRendu": "1/12/2022", "nom": "Larina", "rendu": true },
   { "id": 46, "dateDeRendu": "8/28/2022", "nom": "Kamila", "rendu": false },
   { "id": 47, "dateDeRendu": "10/23/2022", "nom": "Rosaleen", "rendu": true },
   { "id": 48, "dateDeRendu": "7/30/2022", "nom": "Darcie", "rendu": true },
   { "id": 49, "dateDeRendu": "4/15/2022", "nom": "Isaac", "rendu": false },
   { "id": 50, "dateDeRendu": "10/19/2022", "nom": "Darb", "rendu": true },
   { "id": 51, "dateDeRendu": "5/1/2022", "nom": "Emogene", "rendu": true },
   { "id": 52, "dateDeRendu": "9/2/2022", "nom": "Emilee", "rendu": true },
   { "id": 53, "dateDeRendu": "12/4/2021", "nom": "Ophelia", "rendu": true },
   { "id": 54, "dateDeRendu": "7/3/2022", "nom": "Connie", "rendu": false },
   { "id": 55, "dateDeRendu": "8/16/2022", "nom": "Salvador", "rendu": true },
   { "id": 56, "dateDeRendu": "6/10/2022", "nom": "Norri", "rendu": true },
   { "id": 57, "dateDeRendu": "4/16/2022", "nom": "Missie", "rendu": true },
   { "id": 58, "dateDeRendu": "11/21/2021", "nom": "Billy", "rendu": false },
   { "id": 59, "dateDeRendu": "1/10/2022", "nom": "Stuart", "rendu": false },
   { "id": 60, "dateDeRendu": "5/22/2022", "nom": "Ettore", "rendu": false },
   { "id": 61, "dateDeRendu": "11/8/2022", "nom": "Dela", "rendu": true },
   { "id": 62, "dateDeRendu": "4/29/2022", "nom": "Maisey", "rendu": false },
   { "id": 63, "dateDeRendu": "5/27/2022", "nom": "Poul", "rendu": true },
   { "id": 64, "dateDeRendu": "3/25/2022", "nom": "Gretta", "rendu": false },
   { "id": 65, "dateDeRendu": "2/16/2022", "nom": "Eugene", "rendu": true },
   { "id": 66, "dateDeRendu": "6/1/2022", "nom": "Hermy", "rendu": true },
   { "id": 67, "dateDeRendu": "3/31/2022", "nom": "Ira", "rendu": false },
   { "id": 68, "dateDeRendu": "7/5/2022", "nom": "Ced", "rendu": false },
   { "id": 69, "dateDeRendu": "2/12/2022", "nom": "Linell", "rendu": false },
   { "id": 70, "dateDeRendu": "9/2/2022", "nom": "Ruddy", "rendu": false },
   { "id": 71, "dateDeRendu": "12/26/2021", "nom": "Susanetta", "rendu": false },
   { "id": 72, "dateDeRendu": "5/4/2022", "nom": "Baillie", "rendu": false },
   { "id": 73, "dateDeRendu": "4/28/2022", "nom": "Orsa", "rendu": true },
   { "id": 74, "dateDeRendu": "9/16/2022", "nom": "Gaynor", "rendu": true },
   { "id": 75, "dateDeRendu": "7/28/2022", "nom": "Lilas", "rendu": true },
   { "id": 76, "dateDeRendu": "11/10/2021", "nom": "Sonni", "rendu": true },
   { "id": 77, "dateDeRendu": "6/20/2022", "nom": "Rosemarie", "rendu": false },
   { "id": 78, "dateDeRendu": "8/22/2022", "nom": "Edward", "rendu": true },
   { "id": 79, "dateDeRendu": "5/9/2022", "nom": "Davis", "rendu": false },
   { "id": 80, "dateDeRendu": "10/22/2022", "nom": "Matthus", "rendu": true },
   { "id": 81, "dateDeRendu": "12/23/2021", "nom": "Chiarra", "rendu": false },
   { "id": 82, "dateDeRendu": "11/2/2022", "nom": "Priscella", "rendu": false },
   { "id": 83, "dateDeRendu": "4/26/2022", "nom": "Aurelia", "rendu": true },
   { "id": 84, "dateDeRendu": "10/13/2022", "nom": "Judie", "rendu": false },
   { "id": 85, "dateDeRendu": "1/18/2022", "nom": "Ariel", "rendu": true },
   { "id": 86, "dateDeRendu": "1/2/2022", "nom": "Gaby", "rendu": true },
   { "id": 87, "dateDeRendu": "3/14/2022", "nom": "Anastasie", "rendu": false },
   { "id": 88, "dateDeRendu": "9/11/2022", "nom": "Kendricks", "rendu": true },
   { "id": 89, "dateDeRendu": "9/4/2022", "nom": "Lonee", "rendu": false },
   { "id": 90, "dateDeRendu": "6/13/2022", "nom": "Cosetta", "rendu": true },
   { "id": 91, "dateDeRendu": "5/15/2022", "nom": "Kristoffer", "rendu": false },
   { "id": 92, "dateDeRendu": "10/15/2022", "nom": "Cale", "rendu": false },
   { "id": 93, "dateDeRendu": "8/4/2022", "nom": "Marchall", "rendu": true },
   { "id": 94, "dateDeRendu": "1/3/2022", "nom": "Adaline", "rendu": true },
   { "id": 95, "dateDeRendu": "9/29/2022", "nom": "Sile", "rendu": false },
   { "id": 96, "dateDeRendu": "4/29/2022", "nom": "Leann", "rendu": false },
   { "id": 97, "dateDeRendu": "9/14/2022", "nom": "Peirce", "rendu": false },
   { "id": 98, "dateDeRendu": "9/8/2022", "nom": "Glyn", "rendu": false },
   { "id": 99, "dateDeRendu": "4/18/2022", "nom": "Ernaline", "rendu": false },
   { "id": 100, "dateDeRendu": "9/1/2022", "nom": "Lynnea", "rendu": false },
   { "id": 101, "dateDeRendu": "5/16/2022", "nom": "Leontine", "rendu": true },
   { "id": 102, "dateDeRendu": "4/30/2022", "nom": "Teador", "rendu": false },
   { "id": 103, "dateDeRendu": "9/5/2022", "nom": "Pail", "rendu": true },
   { "id": 104, "dateDeRendu": "4/17/2022", "nom": "Kerwin", "rendu": true },
   { "id": 105, "dateDeRendu": "5/24/2022", "nom": "Helga", "rendu": true },
   { "id": 106, "dateDeRendu": "4/3/2022", "nom": "Perceval", "rendu": true },
   { "id": 107, "dateDeRendu": "5/10/2022", "nom": "Lavena", "rendu": true },
   { "id": 108, "dateDeRendu": "11/18/2021", "nom": "Beatrisa", "rendu": false },
   { "id": 109, "dateDeRendu": "2/8/2022", "nom": "Berk", "rendu": true },
   { "id": 110, "dateDeRendu": "11/14/2022", "nom": "Viviyan", "rendu": true },
   { "id": 111, "dateDeRendu": "3/26/2022", "nom": "Nanon", "rendu": false },
   { "id": 112, "dateDeRendu": "8/29/2022", "nom": "Berny", "rendu": true },
   { "id": 113, "dateDeRendu": "10/13/2022", "nom": "Gail", "rendu": false },
   { "id": 114, "dateDeRendu": "9/13/2022", "nom": "Bambi", "rendu": false },
   { "id": 115, "dateDeRendu": "3/2/2022", "nom": "Frayda", "rendu": false },
   { "id": 116, "dateDeRendu": "9/8/2022", "nom": "Vivi", "rendu": true },
   { "id": 117, "dateDeRendu": "1/7/2022", "nom": "Nina", "rendu": true },
   { "id": 118, "dateDeRendu": "4/26/2022", "nom": "Rosemonde", "rendu": true },
   { "id": 119, "dateDeRendu": "7/28/2022", "nom": "Garth", "rendu": true },
   { "id": 120, "dateDeRendu": "3/8/2022", "nom": "Jocelin", "rendu": true },
   { "id": 121, "dateDeRendu": "10/8/2022", "nom": "Caritta", "rendu": false },
   { "id": 122, "dateDeRendu": "9/7/2022", "nom": "Walther", "rendu": false },
   { "id": 123, "dateDeRendu": "1/6/2022", "nom": "Hedvige", "rendu": true },
   { "id": 124, "dateDeRendu": "1/29/2022", "nom": "Lonna", "rendu": true },
   { "id": 125, "dateDeRendu": "3/24/2022", "nom": "Lorettalorna", "rendu": false },
   { "id": 126, "dateDeRendu": "1/27/2022", "nom": "Rolland", "rendu": false },
   { "id": 127, "dateDeRendu": "1/2/2022", "nom": "Nadeen", "rendu": false },
   { "id": 128, "dateDeRendu": "3/13/2022", "nom": "Kleon", "rendu": false },
   { "id": 129, "dateDeRendu": "3/19/2022", "nom": "Milty", "rendu": true },
   { "id": 130, "dateDeRendu": "10/20/2022", "nom": "Sarajane", "rendu": false },
   { "id": 131, "dateDeRendu": "12/4/2021", "nom": "Fleurette", "rendu": false },
   { "id": 132, "dateDeRendu": "11/23/2021", "nom": "Michel", "rendu": false },
   { "id": 133, "dateDeRendu": "12/9/2021", "nom": "Flora", "rendu": false },
   { "id": 134, "dateDeRendu": "4/30/2022", "nom": "Linoel", "rendu": false },
   { "id": 135, "dateDeRendu": "2/2/2022", "nom": "Papagena", "rendu": true },
   { "id": 136, "dateDeRendu": "9/1/2022", "nom": "Mindy", "rendu": false },
   { "id": 137, "dateDeRendu": "4/20/2022", "nom": "Nicolina", "rendu": true },
   { "id": 138, "dateDeRendu": "10/7/2022", "nom": "Marshal", "rendu": false },
   { "id": 139, "dateDeRendu": "1/26/2022", "nom": "Rudolfo", "rendu": true },
   { "id": 140, "dateDeRendu": "7/1/2022", "nom": "Adrianna", "rendu": true },
   { "id": 141, "dateDeRendu": "5/5/2022", "nom": "Tisha", "rendu": false },
   { "id": 142, "dateDeRendu": "2/10/2022", "nom": "Zoe", "rendu": true },
   { "id": 143, "dateDeRendu": "10/14/2022", "nom": "Aggi", "rendu": true },
   { "id": 144, "dateDeRendu": "4/24/2022", "nom": "Waldon", "rendu": true },
   { "id": 145, "dateDeRendu": "5/22/2022", "nom": "Codi", "rendu": false },
   { "id": 146, "dateDeRendu": "1/20/2022", "nom": "Mylo", "rendu": false },
   { "id": 147, "dateDeRendu": "6/21/2022", "nom": "Wyndham", "rendu": true },
   { "id": 148, "dateDeRendu": "10/29/2022", "nom": "Nadeen", "rendu": false },
   { "id": 149, "dateDeRendu": "4/19/2022", "nom": "Gaelan", "rendu": false },
   { "id": 150, "dateDeRendu": "12/14/2021", "nom": "Brett", "rendu": false },
   { "id": 151, "dateDeRendu": "8/3/2022", "nom": "Bidget", "rendu": true },
   { "id": 152, "dateDeRendu": "9/11/2022", "nom": "Sophey", "rendu": false },
   { "id": 153, "dateDeRendu": "3/15/2022", "nom": "Elene", "rendu": true },
   { "id": 154, "dateDeRendu": "8/19/2022", "nom": "Katie", "rendu": false },
   { "id": 155, "dateDeRendu": "10/12/2022", "nom": "Faber", "rendu": false },
   { "id": 156, "dateDeRendu": "3/8/2022", "nom": "Corey", "rendu": false },
   { "id": 157, "dateDeRendu": "7/7/2022", "nom": "Corrie", "rendu": false },
   { "id": 158, "dateDeRendu": "6/5/2022", "nom": "Ivar", "rendu": true },
   { "id": 159, "dateDeRendu": "8/26/2022", "nom": "Nikolos", "rendu": true },
   { "id": 160, "dateDeRendu": "8/22/2022", "nom": "Joey", "rendu": false },
   { "id": 161, "dateDeRendu": "10/1/2022", "nom": "Kristos", "rendu": false },
   { "id": 162, "dateDeRendu": "10/3/2022", "nom": "Nerte", "rendu": false },
   { "id": 163, "dateDeRendu": "4/5/2022", "nom": "Adrian", "rendu": true },
   { "id": 164, "dateDeRendu": "5/29/2022", "nom": "Andriette", "rendu": false },
   { "id": 165, "dateDeRendu": "1/6/2022", "nom": "Fredek", "rendu": true },
   { "id": 166, "dateDeRendu": "9/30/2022", "nom": "Annelise", "rendu": false },
   { "id": 167, "dateDeRendu": "10/31/2022", "nom": "Crysta", "rendu": false },
   { "id": 168, "dateDeRendu": "9/8/2022", "nom": "Reynard", "rendu": true },
   { "id": 169, "dateDeRendu": "2/3/2022", "nom": "Damiano", "rendu": true },
   { "id": 170, "dateDeRendu": "8/17/2022", "nom": "Adelbert", "rendu": false },
   { "id": 171, "dateDeRendu": "11/13/2022", "nom": "Reginauld", "rendu": true },
   { "id": 172, "dateDeRendu": "6/5/2022", "nom": "Beret", "rendu": false },
   { "id": 173, "dateDeRendu": "6/25/2022", "nom": "Lavina", "rendu": false },
   { "id": 174, "dateDeRendu": "8/6/2022", "nom": "Sid", "rendu": true },
   { "id": 175, "dateDeRendu": "5/1/2022", "nom": "Chickie", "rendu": false },
   { "id": 176, "dateDeRendu": "8/26/2022", "nom": "Hew", "rendu": true },
   { "id": 177, "dateDeRendu": "5/23/2022", "nom": "Felicdad", "rendu": true },
   { "id": 178, "dateDeRendu": "11/25/2021", "nom": "Alexandrina", "rendu": false },
   { "id": 179, "dateDeRendu": "4/6/2022", "nom": "Georgie", "rendu": false },
   { "id": 180, "dateDeRendu": "11/23/2021", "nom": "Ellen", "rendu": true },
   { "id": 181, "dateDeRendu": "10/4/2022", "nom": "Dorian", "rendu": false },
   { "id": 182, "dateDeRendu": "9/17/2022", "nom": "Veronike", "rendu": false },
   { "id": 183, "dateDeRendu": "3/29/2022", "nom": "Glynis", "rendu": false },
   { "id": 184, "dateDeRendu": "2/21/2022", "nom": "D'arcy", "rendu": false },
   { "id": 185, "dateDeRendu": "8/16/2022", "nom": "Zachariah", "rendu": true },
   { "id": 186, "dateDeRendu": "12/31/2021", "nom": "Ulrike", "rendu": false },
   { "id": 187, "dateDeRendu": "10/11/2022", "nom": "Nelie", "rendu": false },
   { "id": 188, "dateDeRendu": "4/25/2022", "nom": "Calli", "rendu": true },
   { "id": 189, "dateDeRendu": "6/27/2022", "nom": "Weidar", "rendu": true },
   { "id": 190, "dateDeRendu": "2/11/2022", "nom": "Lethia", "rendu": true },
   { "id": 191, "dateDeRendu": "8/26/2022", "nom": "Dag", "rendu": true },
   { "id": 192, "dateDeRendu": "2/7/2022", "nom": "Stinky", "rendu": true },
   { "id": 193, "dateDeRendu": "9/14/2022", "nom": "Nial", "rendu": false },
   { "id": 194, "dateDeRendu": "12/9/2021", "nom": "Rorie", "rendu": false },
   { "id": 195, "dateDeRendu": "10/21/2022", "nom": "Carlin", "rendu": true },
   { "id": 196, "dateDeRendu": "7/4/2022", "nom": "Vina", "rendu": true },
   { "id": 197, "dateDeRendu": "11/25/2021", "nom": "Bryant", "rendu": true },
   { "id": 198, "dateDeRendu": "4/22/2022", "nom": "Sonni", "rendu": false },
   { "id": 199, "dateDeRendu": "8/29/2022", "nom": "Scotti", "rendu": true },
   { "id": 200, "dateDeRendu": "9/10/2022", "nom": "Francklin", "rendu": true },
   { "id": 201, "dateDeRendu": "6/7/2022", "nom": "Valentina", "rendu": false },
   { "id": 202, "dateDeRendu": "3/23/2022", "nom": "Tracie", "rendu": true },
   { "id": 203, "dateDeRendu": "8/31/2022", "nom": "Fayina", "rendu": false },
   { "id": 204, "dateDeRendu": "5/31/2022", "nom": "Cad", "rendu": true },
   { "id": 205, "dateDeRendu": "7/15/2022", "nom": "Rori", "rendu": false },
   { "id": 206, "dateDeRendu": "4/1/2022", "nom": "Giana", "rendu": false },
   { "id": 207, "dateDeRendu": "5/18/2022", "nom": "Madelene", "rendu": false },
   { "id": 208, "dateDeRendu": "9/26/2022", "nom": "Candice", "rendu": false },
   { "id": 209, "dateDeRendu": "10/26/2022", "nom": "Harris", "rendu": false },
   { "id": 210, "dateDeRendu": "8/29/2022", "nom": "Maura", "rendu": true },
   { "id": 211, "dateDeRendu": "3/1/2022", "nom": "Ollie", "rendu": false },
   { "id": 212, "dateDeRendu": "4/15/2022", "nom": "Farlee", "rendu": false },
   { "id": 213, "dateDeRendu": "4/6/2022", "nom": "Myca", "rendu": false },
   { "id": 214, "dateDeRendu": "9/30/2022", "nom": "Stillman", "rendu": true },
   { "id": 215, "dateDeRendu": "12/5/2021", "nom": "Kain", "rendu": false },
   { "id": 216, "dateDeRendu": "1/27/2022", "nom": "Pearla", "rendu": false },
   { "id": 217, "dateDeRendu": "7/9/2022", "nom": "Cyndy", "rendu": true },
   { "id": 218, "dateDeRendu": "8/9/2022", "nom": "Jakob", "rendu": false },
   { "id": 219, "dateDeRendu": "10/13/2022", "nom": "Wye", "rendu": false },
   { "id": 220, "dateDeRendu": "10/8/2022", "nom": "Melissa", "rendu": true },
   { "id": 221, "dateDeRendu": "4/9/2022", "nom": "Codee", "rendu": true },
   { "id": 222, "dateDeRendu": "4/17/2022", "nom": "Felice", "rendu": true },
   { "id": 223, "dateDeRendu": "12/25/2021", "nom": "Vanny", "rendu": false },
   { "id": 224, "dateDeRendu": "6/27/2022", "nom": "Flori", "rendu": false },
   { "id": 225, "dateDeRendu": "3/13/2022", "nom": "Marylou", "rendu": true },
   { "id": 226, "dateDeRendu": "6/2/2022", "nom": "Arch", "rendu": false },
   { "id": 227, "dateDeRendu": "6/2/2022", "nom": "Gussie", "rendu": true },
   { "id": 228, "dateDeRendu": "5/19/2022", "nom": "Theodoric", "rendu": false },
   { "id": 229, "dateDeRendu": "10/5/2022", "nom": "Sauncho", "rendu": false },
   { "id": 230, "dateDeRendu": "9/23/2022", "nom": "Pippa", "rendu": false },
   { "id": 231, "dateDeRendu": "2/7/2022", "nom": "Perrine", "rendu": true },
   { "id": 232, "dateDeRendu": "8/20/2022", "nom": "Reta", "rendu": true },
   { "id": 233, "dateDeRendu": "4/1/2022", "nom": "Charo", "rendu": true },
   { "id": 234, "dateDeRendu": "9/3/2022", "nom": "Derby", "rendu": false },
   { "id": 235, "dateDeRendu": "2/2/2022", "nom": "Arabela", "rendu": true },
   { "id": 236, "dateDeRendu": "12/14/2021", "nom": "Ado", "rendu": true },
   { "id": 237, "dateDeRendu": "4/25/2022", "nom": "Dell", "rendu": false },
   { "id": 238, "dateDeRendu": "8/13/2022", "nom": "Rosalyn", "rendu": false },
   { "id": 239, "dateDeRendu": "5/7/2022", "nom": "Jane", "rendu": false },
   { "id": 240, "dateDeRendu": "12/27/2021", "nom": "Pacorro", "rendu": false },
   { "id": 241, "dateDeRendu": "6/24/2022", "nom": "Shandeigh", "rendu": true },
   { "id": 242, "dateDeRendu": "11/13/2022", "nom": "Belle", "rendu": false },
   { "id": 243, "dateDeRendu": "2/8/2022", "nom": "Brittaney", "rendu": true },
   { "id": 244, "dateDeRendu": "11/26/2021", "nom": "Kerrie", "rendu": true },
   { "id": 245, "dateDeRendu": "11/23/2021", "nom": "Mattie", "rendu": false },
   { "id": 246, "dateDeRendu": "12/3/2021", "nom": "Jolee", "rendu": true },
   { "id": 247, "dateDeRendu": "7/14/2022", "nom": "Sabra", "rendu": true },
   { "id": 248, "dateDeRendu": "8/21/2022", "nom": "Kaila", "rendu": true },
   { "id": 249, "dateDeRendu": "1/11/2022", "nom": "Suzann", "rendu": false },
   { "id": 250, "dateDeRendu": "3/22/2022", "nom": "Cindi", "rendu": false },
   { "id": 251, "dateDeRendu": "8/2/2022", "nom": "Gordon", "rendu": false },
   { "id": 252, "dateDeRendu": "10/27/2022", "nom": "Yvonne", "rendu": true },
   { "id": 253, "dateDeRendu": "3/9/2022", "nom": "Adolpho", "rendu": true },
   { "id": 254, "dateDeRendu": "1/31/2022", "nom": "Karel", "rendu": true },
   { "id": 255, "dateDeRendu": "5/12/2022", "nom": "Caddric", "rendu": true },
   { "id": 256, "dateDeRendu": "11/7/2022", "nom": "Vinnie", "rendu": true },
   { "id": 257, "dateDeRendu": "11/15/2021", "nom": "Jan", "rendu": true },
   { "id": 258, "dateDeRendu": "8/3/2022", "nom": "Mathias", "rendu": true },
   { "id": 259, "dateDeRendu": "7/6/2022", "nom": "Devon", "rendu": false },
   { "id": 260, "dateDeRendu": "6/21/2022", "nom": "Allister", "rendu": true },
   { "id": 261, "dateDeRendu": "2/24/2022", "nom": "Rhiamon", "rendu": true },
   { "id": 262, "dateDeRendu": "8/21/2022", "nom": "Zsazsa", "rendu": true },
   { "id": 263, "dateDeRendu": "1/17/2022", "nom": "Dallas", "rendu": false },
   { "id": 264, "dateDeRendu": "11/30/2021", "nom": "Chad", "rendu": true },
   { "id": 265, "dateDeRendu": "9/1/2022", "nom": "Marna", "rendu": false },
   { "id": 266, "dateDeRendu": "8/29/2022", "nom": "Gearard", "rendu": false },
   { "id": 267, "dateDeRendu": "9/17/2022", "nom": "Dorita", "rendu": true },
   { "id": 268, "dateDeRendu": "11/23/2021", "nom": "Debee", "rendu": false },
   { "id": 269, "dateDeRendu": "6/21/2022", "nom": "Shannen", "rendu": false },
   { "id": 270, "dateDeRendu": "8/26/2022", "nom": "Georgetta", "rendu": true },
   { "id": 271, "dateDeRendu": "7/8/2022", "nom": "Carlos", "rendu": true },
   { "id": 272, "dateDeRendu": "4/8/2022", "nom": "Gearalt", "rendu": true },
   { "id": 273, "dateDeRendu": "5/26/2022", "nom": "Susie", "rendu": false },
   { "id": 274, "dateDeRendu": "9/1/2022", "nom": "Karin", "rendu": false },
   { "id": 275, "dateDeRendu": "1/18/2022", "nom": "Kristien", "rendu": false },
   { "id": 276, "dateDeRendu": "5/3/2022", "nom": "Yvon", "rendu": false },
   { "id": 277, "dateDeRendu": "7/3/2022", "nom": "Carlie", "rendu": false },
   { "id": 278, "dateDeRendu": "11/12/2022", "nom": "Nata", "rendu": true },
   { "id": 279, "dateDeRendu": "4/20/2022", "nom": "Tobit", "rendu": true },
   { "id": 280, "dateDeRendu": "8/31/2022", "nom": "Jobie", "rendu": true },
   { "id": 281, "dateDeRendu": "12/15/2021", "nom": "Dorelia", "rendu": false },
   { "id": 282, "dateDeRendu": "5/30/2022", "nom": "Delphine", "rendu": true },
   { "id": 283, "dateDeRendu": "1/29/2022", "nom": "Melisenda", "rendu": false },
   { "id": 284, "dateDeRendu": "8/15/2022", "nom": "Ludvig", "rendu": true },
   { "id": 285, "dateDeRendu": "6/1/2022", "nom": "Roselle", "rendu": false },
   { "id": 286, "dateDeRendu": "1/6/2022", "nom": "Meridel", "rendu": true },
   { "id": 287, "dateDeRendu": "12/2/2021", "nom": "Brant", "rendu": true },
   { "id": 288, "dateDeRendu": "4/10/2022", "nom": "Elysha", "rendu": false },
   { "id": 289, "dateDeRendu": "6/8/2022", "nom": "Emmalyn", "rendu": false },
   { "id": 290, "dateDeRendu": "4/20/2022", "nom": "Augustine", "rendu": true },
   { "id": 291, "dateDeRendu": "10/4/2022", "nom": "Gilberte", "rendu": false },
   { "id": 292, "dateDeRendu": "4/29/2022", "nom": "Farlie", "rendu": true },
   { "id": 293, "dateDeRendu": "12/24/2021", "nom": "Eleni", "rendu": false },
   { "id": 294, "dateDeRendu": "12/18/2021", "nom": "Odelle", "rendu": true },
   { "id": 295, "dateDeRendu": "6/7/2022", "nom": "Aliza", "rendu": false },
   { "id": 296, "dateDeRendu": "4/29/2022", "nom": "Byron", "rendu": false },
   { "id": 297, "dateDeRendu": "2/10/2022", "nom": "Evonne", "rendu": false },
   { "id": 298, "dateDeRendu": "11/5/2022", "nom": "Herve", "rendu": false },
   { "id": 299, "dateDeRendu": "5/13/2022", "nom": "Lusa", "rendu": false },
   { "id": 300, "dateDeRendu": "1/5/2022", "nom": "Darrel", "rendu": false },
   { "id": 301, "dateDeRendu": "10/21/2022", "nom": "Rodolph", "rendu": true },
   { "id": 302, "dateDeRendu": "5/7/2022", "nom": "Shandy", "rendu": true },
   { "id": 303, "dateDeRendu": "7/12/2022", "nom": "Thorsten", "rendu": false },
   { "id": 304, "dateDeRendu": "5/28/2022", "nom": "Allis", "rendu": false },
   { "id": 305, "dateDeRendu": "3/20/2022", "nom": "Mort", "rendu": false },
   { "id": 306, "dateDeRendu": "12/5/2021", "nom": "Alayne", "rendu": true },
   { "id": 307, "dateDeRendu": "8/4/2022", "nom": "Jerrine", "rendu": false },
   { "id": 308, "dateDeRendu": "12/30/2021", "nom": "Johannes", "rendu": true },
   { "id": 309, "dateDeRendu": "7/4/2022", "nom": "Barnard", "rendu": false },
   { "id": 310, "dateDeRendu": "7/26/2022", "nom": "Kalle", "rendu": false },
   { "id": 311, "dateDeRendu": "7/23/2022", "nom": "Rae", "rendu": true },
   { "id": 312, "dateDeRendu": "8/7/2022", "nom": "Marian", "rendu": true },
   { "id": 313, "dateDeRendu": "6/16/2022", "nom": "Emlen", "rendu": true },
   { "id": 314, "dateDeRendu": "11/9/2022", "nom": "Mair", "rendu": true },
   { "id": 315, "dateDeRendu": "12/24/2021", "nom": "Thornton", "rendu": false },
   { "id": 316, "dateDeRendu": "3/4/2022", "nom": "Ann", "rendu": false },
   { "id": 317, "dateDeRendu": "5/23/2022", "nom": "Tilda", "rendu": false },
   { "id": 318, "dateDeRendu": "5/14/2022", "nom": "Aveline", "rendu": true },
   { "id": 319, "dateDeRendu": "11/26/2021", "nom": "Merl", "rendu": true },
   { "id": 320, "dateDeRendu": "4/29/2022", "nom": "Maddie", "rendu": true },
   { "id": 321, "dateDeRendu": "8/20/2022", "nom": "Reeva", "rendu": true },
   { "id": 322, "dateDeRendu": "2/9/2022", "nom": "Hallsy", "rendu": false },
   { "id": 323, "dateDeRendu": "6/10/2022", "nom": "Tommi", "rendu": true },
   { "id": 324, "dateDeRendu": "10/2/2022", "nom": "Ainslee", "rendu": false },
   { "id": 325, "dateDeRendu": "6/6/2022", "nom": "Antons", "rendu": true },
   { "id": 326, "dateDeRendu": "11/24/2021", "nom": "Eldin", "rendu": true },
   { "id": 327, "dateDeRendu": "3/11/2022", "nom": "Rosa", "rendu": false },
   { "id": 328, "dateDeRendu": "1/12/2022", "nom": "Euphemia", "rendu": false },
   { "id": 329, "dateDeRendu": "4/15/2022", "nom": "Maggee", "rendu": true },
   { "id": 330, "dateDeRendu": "12/17/2021", "nom": "Umberto", "rendu": false },
   { "id": 331, "dateDeRendu": "5/29/2022", "nom": "Corbin", "rendu": true },
   { "id": 332, "dateDeRendu": "10/19/2022", "nom": "Ingar", "rendu": true },
   { "id": 333, "dateDeRendu": "2/20/2022", "nom": "Ernest", "rendu": true },
   { "id": 334, "dateDeRendu": "2/14/2022", "nom": "Aubrette", "rendu": false },
   { "id": 335, "dateDeRendu": "8/5/2022", "nom": "Aurlie", "rendu": true },
   { "id": 336, "dateDeRendu": "10/26/2022", "nom": "Tobe", "rendu": true },
   { "id": 337, "dateDeRendu": "8/3/2022", "nom": "Dennis", "rendu": false },
   { "id": 338, "dateDeRendu": "6/2/2022", "nom": "Anne", "rendu": true },
   { "id": 339, "dateDeRendu": "1/1/2022", "nom": "Gregorio", "rendu": false },
   { "id": 340, "dateDeRendu": "6/28/2022", "nom": "Bert", "rendu": true },
   { "id": 341, "dateDeRendu": "10/5/2022", "nom": "Bond", "rendu": false },
   { "id": 342, "dateDeRendu": "12/28/2021", "nom": "Peterus", "rendu": true },
   { "id": 343, "dateDeRendu": "10/26/2022", "nom": "Stevena", "rendu": true },
   { "id": 344, "dateDeRendu": "5/24/2022", "nom": "Lane", "rendu": true },
   { "id": 345, "dateDeRendu": "4/22/2022", "nom": "Audi", "rendu": false },
   { "id": 346, "dateDeRendu": "9/14/2022", "nom": "Eran", "rendu": true },
   { "id": 347, "dateDeRendu": "11/17/2022", "nom": "Araldo", "rendu": false },
   { "id": 348, "dateDeRendu": "11/17/2022", "nom": "Audre", "rendu": false },
   { "id": 349, "dateDeRendu": "8/23/2022", "nom": "Baily", "rendu": false },
   { "id": 350, "dateDeRendu": "8/21/2022", "nom": "Laverne", "rendu": true },
   { "id": 351, "dateDeRendu": "2/18/2022", "nom": "Katharina", "rendu": false },
   { "id": 352, "dateDeRendu": "6/14/2022", "nom": "Winona", "rendu": false },
   { "id": 353, "dateDeRendu": "4/29/2022", "nom": "Herrick", "rendu": true },
   { "id": 354, "dateDeRendu": "11/4/2022", "nom": "Daniel", "rendu": false },
   { "id": 355, "dateDeRendu": "9/7/2022", "nom": "Tarrah", "rendu": false },
   { "id": 356, "dateDeRendu": "2/4/2022", "nom": "Toma", "rendu": true },
   { "id": 357, "dateDeRendu": "10/15/2022", "nom": "Cari", "rendu": false },
   { "id": 358, "dateDeRendu": "10/19/2022", "nom": "Jacquie", "rendu": false },
   { "id": 359, "dateDeRendu": "6/18/2022", "nom": "Enrica", "rendu": true },
   { "id": 360, "dateDeRendu": "6/8/2022", "nom": "Poul", "rendu": true },
   { "id": 361, "dateDeRendu": "6/15/2022", "nom": "Frazer", "rendu": false },
   { "id": 362, "dateDeRendu": "7/8/2022", "nom": "Gigi", "rendu": false },
   { "id": 363, "dateDeRendu": "4/25/2022", "nom": "Lyndy", "rendu": true },
   { "id": 364, "dateDeRendu": "1/26/2022", "nom": "Allina", "rendu": false },
   { "id": 365, "dateDeRendu": "11/12/2022", "nom": "Lowrance", "rendu": false },
   { "id": 366, "dateDeRendu": "4/12/2022", "nom": "Cherice", "rendu": true },
   { "id": 367, "dateDeRendu": "8/26/2022", "nom": "Aksel", "rendu": false },
   { "id": 368, "dateDeRendu": "9/4/2022", "nom": "Letitia", "rendu": false },
   { "id": 369, "dateDeRendu": "3/23/2022", "nom": "Larry", "rendu": true },
   { "id": 370, "dateDeRendu": "6/20/2022", "nom": "Gherardo", "rendu": false },
   { "id": 371, "dateDeRendu": "11/26/2021", "nom": "Dot", "rendu": true },
   { "id": 372, "dateDeRendu": "10/4/2022", "nom": "Steffie", "rendu": false },
   { "id": 373, "dateDeRendu": "5/23/2022", "nom": "Milzie", "rendu": true },
   { "id": 374, "dateDeRendu": "6/6/2022", "nom": "Jerry", "rendu": false },
   { "id": 375, "dateDeRendu": "6/14/2022", "nom": "Tania", "rendu": false },
   { "id": 376, "dateDeRendu": "5/4/2022", "nom": "Matti", "rendu": false },
   { "id": 377, "dateDeRendu": "6/25/2022", "nom": "Prinz", "rendu": false },
   { "id": 378, "dateDeRendu": "8/4/2022", "nom": "Sydel", "rendu": false },
   { "id": 379, "dateDeRendu": "6/10/2022", "nom": "Evey", "rendu": false },
   { "id": 380, "dateDeRendu": "1/24/2022", "nom": "Kahaleel", "rendu": true },
   { "id": 381, "dateDeRendu": "7/14/2022", "nom": "Ailis", "rendu": false },
   { "id": 382, "dateDeRendu": "9/6/2022", "nom": "Randolph", "rendu": true },
   { "id": 383, "dateDeRendu": "11/13/2021", "nom": "Maddy", "rendu": false },
   { "id": 384, "dateDeRendu": "8/12/2022", "nom": "Ilise", "rendu": true },
   { "id": 385, "dateDeRendu": "3/6/2022", "nom": "Fanchon", "rendu": false },
   { "id": 386, "dateDeRendu": "6/16/2022", "nom": "Ludvig", "rendu": true },
   { "id": 387, "dateDeRendu": "7/28/2022", "nom": "Ashely", "rendu": false },
   { "id": 388, "dateDeRendu": "9/6/2022", "nom": "Marti", "rendu": false },
   { "id": 389, "dateDeRendu": "4/8/2022", "nom": "Aubine", "rendu": false },
   { "id": 390, "dateDeRendu": "3/5/2022", "nom": "Estrellita", "rendu": true },
   { "id": 391, "dateDeRendu": "4/23/2022", "nom": "Terza", "rendu": false },
   { "id": 392, "dateDeRendu": "11/3/2022", "nom": "Lock", "rendu": false },
   { "id": 393, "dateDeRendu": "7/22/2022", "nom": "Holly-anne", "rendu": false },
   { "id": 394, "dateDeRendu": "6/19/2022", "nom": "Francesco", "rendu": false },
   { "id": 395, "dateDeRendu": "4/2/2022", "nom": "Annalee", "rendu": false },
   { "id": 396, "dateDeRendu": "1/15/2022", "nom": "Dyanna", "rendu": true },
   { "id": 397, "dateDeRendu": "5/16/2022", "nom": "Huntington", "rendu": false },
   { "id": 398, "dateDeRendu": "8/30/2022", "nom": "Jo-ann", "rendu": false },
   { "id": 399, "dateDeRendu": "9/2/2022", "nom": "Deana", "rendu": false },
   { "id": 400, "dateDeRendu": "9/27/2022", "nom": "Jonah", "rendu": false },
   { "id": 401, "dateDeRendu": "9/3/2022", "nom": "Issie", "rendu": false },
   { "id": 402, "dateDeRendu": "11/26/2021", "nom": "Pietrek", "rendu": false },
   { "id": 403, "dateDeRendu": "12/13/2021", "nom": "Melisenda", "rendu": false },
   { "id": 404, "dateDeRendu": "1/15/2022", "nom": "Gustavo", "rendu": true },
   { "id": 405, "dateDeRendu": "4/4/2022", "nom": "Ingunna", "rendu": true },
   { "id": 406, "dateDeRendu": "6/25/2022", "nom": "Devlen", "rendu": true },
   { "id": 407, "dateDeRendu": "7/22/2022", "nom": "Analise", "rendu": false },
   { "id": 408, "dateDeRendu": "12/17/2021", "nom": "Vina", "rendu": false },
   { "id": 409, "dateDeRendu": "9/30/2022", "nom": "Florian", "rendu": true },
   { "id": 410, "dateDeRendu": "6/10/2022", "nom": "Kellby", "rendu": true },
   { "id": 411, "dateDeRendu": "6/18/2022", "nom": "Gerri", "rendu": false },
   { "id": 412, "dateDeRendu": "5/22/2022", "nom": "Aaron", "rendu": true },
   { "id": 413, "dateDeRendu": "9/29/2022", "nom": "Angelica", "rendu": false },
   { "id": 414, "dateDeRendu": "9/16/2022", "nom": "Alane", "rendu": false },
   { "id": 415, "dateDeRendu": "10/22/2022", "nom": "Rorie", "rendu": true },
   { "id": 416, "dateDeRendu": "2/20/2022", "nom": "Nikolos", "rendu": true },
   { "id": 417, "dateDeRendu": "4/23/2022", "nom": "Kort", "rendu": false },
   { "id": 418, "dateDeRendu": "5/3/2022", "nom": "Benny", "rendu": false },
   { "id": 419, "dateDeRendu": "2/13/2022", "nom": "Seamus", "rendu": false },
   { "id": 420, "dateDeRendu": "10/18/2022", "nom": "Saunders", "rendu": true },
   { "id": 421, "dateDeRendu": "4/15/2022", "nom": "Erastus", "rendu": false },
   { "id": 422, "dateDeRendu": "11/16/2022", "nom": "Tiffanie", "rendu": false },
   { "id": 423, "dateDeRendu": "9/2/2022", "nom": "Adham", "rendu": true },
   { "id": 424, "dateDeRendu": "4/11/2022", "nom": "Archambault", "rendu": true },
   { "id": 425, "dateDeRendu": "12/7/2021", "nom": "Jemimah", "rendu": false },
   { "id": 426, "dateDeRendu": "8/13/2022", "nom": "Noland", "rendu": false },
   { "id": 427, "dateDeRendu": "1/23/2022", "nom": "Carny", "rendu": false },
   { "id": 428, "dateDeRendu": "2/13/2022", "nom": "Claretta", "rendu": false },
   { "id": 429, "dateDeRendu": "2/25/2022", "nom": "Tuckie", "rendu": false },
   { "id": 430, "dateDeRendu": "12/2/2021", "nom": "Brenden", "rendu": true },
   { "id": 431, "dateDeRendu": "5/30/2022", "nom": "Burke", "rendu": true },
   { "id": 432, "dateDeRendu": "9/16/2022", "nom": "Roselin", "rendu": true },
   { "id": 433, "dateDeRendu": "6/3/2022", "nom": "Sidney", "rendu": false },
   { "id": 434, "dateDeRendu": "10/22/2022", "nom": "Zaccaria", "rendu": false },
   { "id": 435, "dateDeRendu": "7/7/2022", "nom": "Elene", "rendu": false },
   { "id": 436, "dateDeRendu": "8/10/2022", "nom": "Jacenta", "rendu": false },
   { "id": 437, "dateDeRendu": "2/12/2022", "nom": "Erinna", "rendu": false },
   { "id": 438, "dateDeRendu": "8/26/2022", "nom": "Ruddy", "rendu": true },
   { "id": 439, "dateDeRendu": "12/31/2021", "nom": "Mortimer", "rendu": false },
   { "id": 440, "dateDeRendu": "1/11/2022", "nom": "Loreen", "rendu": false },
   { "id": 441, "dateDeRendu": "10/7/2022", "nom": "Alaric", "rendu": true },
   { "id": 442, "dateDeRendu": "8/11/2022", "nom": "Israel", "rendu": true },
   { "id": 443, "dateDeRendu": "2/16/2022", "nom": "Vina", "rendu": true },
   { "id": 444, "dateDeRendu": "9/7/2022", "nom": "Ronni", "rendu": true },
   { "id": 445, "dateDeRendu": "4/30/2022", "nom": "Ediva", "rendu": true },
   { "id": 446, "dateDeRendu": "6/11/2022", "nom": "Bartholomeus", "rendu": false },
   { "id": 447, "dateDeRendu": "3/16/2022", "nom": "Edythe", "rendu": false },
   { "id": 448, "dateDeRendu": "7/2/2022", "nom": "Thayne", "rendu": false },
   { "id": 449, "dateDeRendu": "9/9/2022", "nom": "Shawnee", "rendu": true },
   { "id": 450, "dateDeRendu": "9/3/2022", "nom": "Anthony", "rendu": false },
   { "id": 451, "dateDeRendu": "8/17/2022", "nom": "Doralynn", "rendu": true },
   { "id": 452, "dateDeRendu": "7/2/2022", "nom": "Briano", "rendu": true },
   { "id": 453, "dateDeRendu": "6/23/2022", "nom": "Drucill", "rendu": true },
   { "id": 454, "dateDeRendu": "3/10/2022", "nom": "Ashly", "rendu": false },
   { "id": 455, "dateDeRendu": "7/16/2022", "nom": "Deborah", "rendu": true },
   { "id": 456, "dateDeRendu": "9/3/2022", "nom": "Jo", "rendu": true },
   { "id": 457, "dateDeRendu": "7/22/2022", "nom": "Aaren", "rendu": true },
   { "id": 458, "dateDeRendu": "11/30/2021", "nom": "Freedman", "rendu": false },
   { "id": 459, "dateDeRendu": "1/2/2022", "nom": "Corey", "rendu": true },
   { "id": 460, "dateDeRendu": "1/7/2022", "nom": "Emmalyn", "rendu": true },
   { "id": 461, "dateDeRendu": "5/19/2022", "nom": "Matelda", "rendu": false },
   { "id": 462, "dateDeRendu": "5/2/2022", "nom": "Efrem", "rendu": true },
   { "id": 463, "dateDeRendu": "6/6/2022", "nom": "Pacorro", "rendu": true },
   { "id": 464, "dateDeRendu": "8/20/2022", "nom": "Rriocard", "rendu": true },
   { "id": 465, "dateDeRendu": "10/3/2022", "nom": "Barb", "rendu": false },
   { "id": 466, "dateDeRendu": "1/19/2022", "nom": "Kalila", "rendu": false },
   { "id": 467, "dateDeRendu": "1/7/2022", "nom": "Caspar", "rendu": true },
   { "id": 468, "dateDeRendu": "1/2/2022", "nom": "Arlee", "rendu": false },
   { "id": 469, "dateDeRendu": "6/28/2022", "nom": "Gilligan", "rendu": false },
   { "id": 470, "dateDeRendu": "8/24/2022", "nom": "Cly", "rendu": true },
   { "id": 471, "dateDeRendu": "4/19/2022", "nom": "Rodrigo", "rendu": true },
   { "id": 472, "dateDeRendu": "9/26/2022", "nom": "Ad", "rendu": true },
   { "id": 473, "dateDeRendu": "8/8/2022", "nom": "Zak", "rendu": false },
   { "id": 474, "dateDeRendu": "10/5/2022", "nom": "Dov", "rendu": true },
   { "id": 475, "dateDeRendu": "7/14/2022", "nom": "Richmound", "rendu": false },
   { "id": 476, "dateDeRendu": "7/7/2022", "nom": "Calida", "rendu": false },
   { "id": 477, "dateDeRendu": "5/11/2022", "nom": "Maurise", "rendu": true },
   { "id": 478, "dateDeRendu": "3/28/2022", "nom": "Murdoch", "rendu": false },
   { "id": 479, "dateDeRendu": "8/19/2022", "nom": "Mace", "rendu": true },
   { "id": 480, "dateDeRendu": "11/17/2022", "nom": "Inga", "rendu": false },
   { "id": 481, "dateDeRendu": "1/11/2022", "nom": "Chase", "rendu": false },
   { "id": 482, "dateDeRendu": "4/19/2022", "nom": "Oates", "rendu": false },
   { "id": 483, "dateDeRendu": "4/23/2022", "nom": "Nerta", "rendu": false },
   { "id": 484, "dateDeRendu": "1/24/2022", "nom": "Holly", "rendu": true },
   { "id": 485, "dateDeRendu": "12/29/2021", "nom": "Brittan", "rendu": true },
   { "id": 486, "dateDeRendu": "9/2/2022", "nom": "Cris", "rendu": true },
   { "id": 487, "dateDeRendu": "11/12/2021", "nom": "Aubine", "rendu": false },
   { "id": 488, "dateDeRendu": "9/2/2022", "nom": "Clovis", "rendu": true },
   { "id": 489, "dateDeRendu": "12/6/2021", "nom": "Maureene", "rendu": false },
   { "id": 490, "dateDeRendu": "3/7/2022", "nom": "Lelia", "rendu": true },
   { "id": 491, "dateDeRendu": "2/17/2022", "nom": "Dorey", "rendu": false },
   { "id": 492, "dateDeRendu": "2/22/2022", "nom": "Marysa", "rendu": false },
   { "id": 493, "dateDeRendu": "10/10/2022", "nom": "Eudora", "rendu": true },
   { "id": 494, "dateDeRendu": "3/13/2022", "nom": "Lindy", "rendu": false },
   { "id": 495, "dateDeRendu": "3/30/2022", "nom": "Tiebold", "rendu": false },
   { "id": 496, "dateDeRendu": "2/21/2022", "nom": "Theadora", "rendu": false },
   { "id": 497, "dateDeRendu": "12/11/2021", "nom": "Emmott", "rendu": false },
   { "id": 498, "dateDeRendu": "4/15/2022", "nom": "Scarlett", "rendu": false },
   { "id": 499, "dateDeRendu": "2/27/2022", "nom": "Ninette", "rendu": true },
   { "id": 500, "dateDeRendu": "12/17/2021", "nom": "Fiann", "rendu": true }
]
export { bdInitialAssignments };
