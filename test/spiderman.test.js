const Spiderman = require("./../app/spiderman")

describe("Unit Tests for Spiderman class", () => {
  test("1 - Create an spiderman object", () => {

    const TobeyMaguire = new Spiderman('Spider-Man', 46, 'Tobey Maguire', 3, 'Columbia Pictures​')

    //Validamos codigo funcione de la forma esperada
    expect(TobeyMaguire.nombre).toBe("Spider-Man");
    expect(TobeyMaguire.edad).toBe(46);
    expect(TobeyMaguire.actor).toBe("Tobey Maguire");
    expect(TobeyMaguire.peliculas).toBe(3);
    expect(TobeyMaguire.estudio).toBe("Columbia Pictures​");
  });
});
