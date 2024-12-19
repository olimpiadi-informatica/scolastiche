access "../../../../asy_library/pictures/carrot.asy" as carrot;
access "../../../../asy_library/pictures/apple.asy" as apple;
access "../../../../asy_library/pictures/banana.asy" as banana;
access "../../../../asy_library/pictures/watermelon.asy" as watermelon;
access "../../../../asy_library/pictures/strawberry.asy" as strawberry;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;

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

    return row(padding = this.pd, ALIGN ... elems);
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
fruit watermelon = fruit(new picture(real k) { return watermelon.drawing(k); }, 0.5, 0.3, -1);
fruit strawberry = fruit(new picture(real k) { return strawberry.drawing(k); }, 0.55, 0.3, -0.2);
fruit apple = fruit(new picture(real k) { return apple.drawing(k); }, 0.7, 0.5, 0);
fruit banana = fruit(new picture(real k) { return banana.drawing(k); }, 0.55, 0.3, -0.3);

fruit[] getfruits(... int perm[]) {
  fruit[] base = {watermelon, strawberry, apple, banana};
  fruit[] res = {carrot, carrot, carrot, carrot};
  for (int i = 0; i < base.length; ++i) {
    res[i] = base[perm[i]];
  }
  return res;
}

