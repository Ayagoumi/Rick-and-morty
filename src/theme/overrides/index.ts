import { merge } from "lodash";
import { Theme } from "@mui/material/styles";
import Drawer from "./Drawer";
import Paper from "./Paper";
import Card from "./Card";
import Container from "./Container";

export default function ComponentsOverrides(theme: Theme) {
  return merge(Drawer(theme), Paper(theme), Card(theme), Container(theme));
}
