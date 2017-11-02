export declare interface IObjectType<T> {
  new(): T
}

export declare type ICombineActions<T> = {
  [P in keyof T]?: IObjectType<T[P]>
}

/**
 * redux thunk
 */
export const createThunkMiddleware = ({ dispatch, getState }: any) => (next: any) => (action: any) => {
  if (typeof action === "function") {
    return action(dispatch, getState)
  }

  return next(action)
}

/**
 * 是否是基本类型
 */
export function isPrimitive(value: any): boolean {
  if (value === null || value === undefined) {
    return true
  }

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean" || value instanceof Date) {
    return true
  }

  return false
}