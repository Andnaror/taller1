function extraerContenido(a) {
    if (a.size !== 0) {
      return "{" + [...a].toString() + "}";
    } else {
      return "Ø";
    }
  }
  
  function union(a1, a2) {
    var union = new Set([...a1, ...a2]);
    if (union.has("")) {
      union.delete("");
    }
    var text = extraerContenido(union);
    return text;
  }
  
  function interseccion(a1, a2) {
    var x1 = new Set([...a1]);
    var x2 = new Set([...a2]);
    var x3 = new Set([...x1].filter((x) => x2.has(x)));
    if (x3.has("")) {
      x3.delete("");
    }
    var text = extraerContenido(x3);
    return text;
  }
  
  function diferencia(a1,a2) {
    var x1 = new Set([...a1]);
    var x2 = new Set([...a2]);
    var x3 = new Set([...x1].filter((x) => !x2.has(x)));
    if (x3.has("")) {
      x3.delete("");
    }
    var text = extraerContenido(x3);
    return text;
  }
  
  function concatenacion(a1, a2, p) {
    var x1 = new Set([...a1]);
    var x2 = new Set([...a2]);
  
    if (x1.has("")) {
      x1.delete("");
      if (x1.size === 0) return "Ø";
    } else if (x2.has("")) {
      x2.delete("");
      if (x2.size === 0) return "Ø";
    }
  
    var pot = p;
    if (pot == 0) {
      x3.add("λ");
    } else {
      var x3 = new Set();
      if (pot >= 1) x3 = new Set(x1);
      while (pot > 1 || pot == -1) {
        for (var i of x1) {
          for (var j of x2) {
            if (i.includes("λ")) {
              x3.add(j);
            } else {
              if (!j.includes("λ")) {
                x3.add(i + j);
              } else {
                x3.add(i);
              }
            }
          }
        }
        x2 = [...x3];
        pot--;
      }
    }
  
    return "{" + [...x3].toString() + "}";
  }
  
  function inverso(a1) {
    var x1 = new Set(a1);
    var x2 = new Set();
    for (var e of x1) {
      x2.add(e.split("").reverse().join(""));
    }
    if (x2.has("")) {
      x2.delete("");
    }
    var text = extraerContenido(x2);
    return text;
  }
  
  function cardinalidad(a1) {
    var x1 = new Set(a1);
    if (x1.has("")) {
      x1.delete("");
    }
    var text = x1.size;
    if (x1.size == 0) return "Ø";
    return text;
  }


    