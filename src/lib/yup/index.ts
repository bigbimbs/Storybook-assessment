import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

declare module "yup" {
  interface StringSchema {
    phone(): StringSchema;
  }
}

export { Yup, yupResolver };
