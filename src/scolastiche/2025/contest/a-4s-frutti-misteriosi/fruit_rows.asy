access "../../../../asy_library/pictures/carrot.asy" as carrot;
access "../../../../asy_library/pictures/potato.asy" as potato;
access "../../../../asy_library/pictures/banana.asy" as banana;
access "../../../../asy_library/pictures/watermelon.asy" as watermelon;
access "../../../../asy_library/pictures/eggplant.asy" as eggplant;
access "../../../../asy_library/pictures/strawberry.asy" as strawberry;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;

TEXT_SIZE = 2.5;

struct fruit {
  picture f(real k);
  real pd;
  real k1;
  real k2;

  element row(int n) {
    element[] elems;
    for(int i=0; i<n; ++i){
        elems[i] = element(this.f(this.k1));
    }

    return row(padding = 0.3, ALIGN ... elems);
  }
  
  element single() {
    return element(this.f(this.k2));
  }

  void operator init(picture f(real k), real k1, real k2, real pd) {
    this.f = f;
    this.pd = pd;
    this.k1 = k1;
    this.k2 = k2;
  }
};

fruit carrot = fruit(new picture(real k) { return carrot.drawing(k); }, 0.2, 0.15, -1);
fruit watermelon = fruit(new picture(real k) { return watermelon.drawing(k); }, 0.5, 0.28, -1);
fruit strawberry = fruit(new picture(real k) { return strawberry.drawing(k); }, 0.55, 0.38, -0.2);
fruit potato = fruit(new picture(real k) { return potato.drawing(k, rgb("875b52"), rgb("513531")); }, 0.45, 0.3, 0);
fruit banana = fruit(new picture(real k) { return banana.drawing(k); }, 0.55, 0.35, -0.3);
fruit eggplant = fruit(new picture(real k) { return eggplant.drawing(k); }, 0.5, 0.3, -0.3);

fruit[] getfruits(... int perm[]) {
  fruit[] base = {watermelon, banana, strawberry, potato, carrot, eggplant};
  fruit[] res = {carrot, carrot, carrot, carrot, carrot, carrot};
  for (int i = 0; i < base.length; ++i) {
    res[i] = base[perm[i]];
  }
  return res;
}

element fruit_row(real padding = 1, element low, element mid, element high) {
  return row(padding, e("\textsf{leggero:}"), low, e("\qquad\textsf{medio:}"), mid, e("\qquad\textsf{pesante:}"), high);
}
