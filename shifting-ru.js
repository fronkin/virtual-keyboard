export const shiftingRu = (text) => {
    switch (text) {
      case "←":
        return "←";
      case "↓":
        return "↓";
      case "↑":
        return "↑";
      case "→":
        return "→";
      case "`":
        return "~";
      case "1":
        return "!";
      case "2":
        return '"';
      case "3":
        return "№";
      case "4":
        return ";";
      case "5":
        return "%";
      case "6":
        return ":";
      case "7":
        return "?";
      case "8":
        return "*";
      case "9":
        return "(";
      case "0":
        return ")";
      case "-":
        return "_";
      case "=":
        return "+";     
      
      case ".":
        return ",";
      case " ":
        return " ";
      case "Caps Lock":
        return "Caps Lock";
  
      default:
        return text;
    }
  }
  
  export const downingRu = (text) => {
      switch (text) {
        case "←":
          return "←";
        case "↓":
          return "↓";
        case "↑":
          return "↑";
        case "→":
          return "→";        
        case "!":
          return "1";
        case '"':
          return "2";
        case "№":
          return "3";
        case ";":
          return "4";
        case "%":
          return "5";
        case ":":
          return "6";
        case "?":
          return "7";
        case "*":
          return "8";
        case "(":
          return "9";
        case ")":
          return "0";
        case "_":
          return "-";
        case "+":
          return "=";        
        case ",":
          return ".";
        case " ":
          return " ";
        case "Caps Lock":
          return "Caps Lock";
    
          default:
              return text;
      }
    }