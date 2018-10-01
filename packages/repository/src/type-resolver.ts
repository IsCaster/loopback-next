// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/repository
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Class} from './common-types';

/**
 * A type resolver is a function that returns a class representing the type,
 * typically a Model or Entity (e.g. Product).
 *
 * We use type resolvers to break require() loops when defining relations.
 * The target model (class) is provided via a provider, thus deferring
 * the actual reference to the class itself until later, when both sides
 * of the relation are created as JavaScript classes.
 *
 * The template has two generic parameters:
 *
 *  - `Type` (required) represents the type we are resolving,
 *     for example `Entity` or `Product`.
 *
 *  - `StaticMembers` (optional) describe static properties available on the
 *     type class. For example, all models have static `modelName` property.
 *     When `StaticMembers` are not provided, we default to static properties of
 *     a `Function` - `name`, `length`, `apply`, `call`, etc.
 *     Please note the value returned by the resolver is described as having
 *     arbitrary additional static properties (see how Class is defined).
 */
export type TypeResolver<
  Type extends Object,
  StaticMembers = Function
> = () => Class<Type> & StaticMembers;

/**
 * A function that checks whether a function is a TypeResolver or not.
 * @param fn The value to check.
 */
export function isTypeResolver<T extends Object>(
  // tslint:disable-next-line:no-any
  fn: any,
): fn is TypeResolver<T> {
  // 1. A type provider must be a function
  if (typeof fn !== 'function') return false;

  // 2. A class constructor is not a type provider
  if (/^class/.test(fn.toString())) return false;

  // 3. Built-in types like Date & Array are not type providers
  if (isBuiltinType(fn)) return false;

  // TODO(bajtos): support model classes defined via ES5 constructor function

  return true;
}

/**
 * Check if the provided function is a built-in type provided by JavaScript
 * and/or Node.js. E.g. `Number`, `Array`, `Buffer`, etc.
 */
export function isBuiltinType(fn: Function): boolean {
  return (
    // scalars
    fn === Number ||
    fn === Boolean ||
    fn === String ||
    // objects
    fn === Object ||
    fn === Array ||
    fn === Date ||
    fn === RegExp ||
    fn === Buffer ||
    // function as a type
    fn === Function
  );
}

/**
 * Resolve a type value that may have been provided via TypeResolver.
 * @param fn A type class or a type provider.
 * @returns The resolved type.
 */
export function resolveType<T extends Object>(
  fn: TypeResolver<T> | Class<T>,
): Class<T>;

// An overload to handle the case when `fn` is not a class nor a resolver.
export function resolveType<T>(fn: T): T;

export function resolveType<T>(fn: TypeResolver<T> | Class<T>) {
  return isTypeResolver(fn) ? fn() : fn;
}