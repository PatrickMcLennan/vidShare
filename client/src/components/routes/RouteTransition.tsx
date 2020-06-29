import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

type RouteProps = {
  children: ReactNode;
  exitBeforeEnter?: boolean;
  initial?: boolean;
};

type TransitionProps = {
  children: ReactNode;
  exact?: boolean;
  path: string;
  slide?: number;
  slideUp?: number;
  rest?: unknown[];
};

type MountProps = {
  children: ReactNode;
  slide?: number;
  slideUp?: number;
};

export function AnimatedRoutes({
  children,
  exitBeforeEnter = true,
  initial = false,
}: RouteProps): JSX.Element {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={location} key={location.pathname}>
        {children}
      </Switch>
    </AnimatePresence>
  );
}

export function MountTransition({
  children,
  slide = 0,
  slideUp = 5,
}: MountProps): JSX.Element {
  return (
    <motion.main
      exit={{ opacity: 0, x: slide, y: slideUp }}
      initial={{ opacity: 0, x: slide, y: slideUp }}
      animate={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.main>
  );
}

export function RouteTransition({
  children,
  exact = false,
  path,
  slide = 0,
  slideUp = 5,
  ...rest
}: TransitionProps): JSX.Element {
  return (
    <Route exact={exact} path="somePath" {...rest}>
      <MountTransition slide={slide} slideUp={slideUp}>
        {children}
      </MountTransition>
    </Route>
  );
}
