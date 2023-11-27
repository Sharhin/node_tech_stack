
type RequestApiMethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export type RequestApiArgsType = {
  url: string,
  method: RequestApiMethodType,
}

type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export async function requestApi(request: RequestApiArgsType, data?: JSONValue): Promise<Response> {
  let body: BodyInit | null | undefined = undefined;
  if (data) {
    if (typeof data === "string") {
      body = data as BodyInit
    }
    else {
      body = data ? JSON.stringify(data) : undefined
    }
  }
  try {
    const { url, method } = request;
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });


  }
  catch (err) {
    console.log(err)
    throw err
  }
}
