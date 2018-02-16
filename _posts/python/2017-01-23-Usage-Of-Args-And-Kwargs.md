---
post_title: "*Args and **Kwargs"
---

During my first coding bout with Python 3, I stumbled upon the concept of \*args. Immediately the idea of a C/C++ dereference operator sprung to mind, which didn't really make any sense as Python lacks an explicit deferencing operator.

<!--excerpt-->
### What *is* this all about then?

\*Args and \*\*Kwargs are actually both [variadic](https://en.wikipedia.org/wiki/Variadic_function) arguments which allow a function to accept a variable number of arguments to a function. Using the \*args argument you can pass in any number of positional arguments to the function which will be wrapped in a tuple.

So make it a little easier to understand, here's an example:

```python
  # Give a greeting.
  def hello(name_a, name_b):
    print("How are you doing today, {} and {}?".format(name_a, name_b))

  hello("Whitney", "Jeremiah")
```

Which should output the following:
```
How are you doing today, Whitney and Jeremiah?
```

What if we wanted to improve this function so that we could greet more than one person at once? We might be able to expand the number of required arguments but that would be bothersome.

```python

  # *args allows any number of arguments
  def hello(*args):

    for name in args:
      print("How are you doing today, {}?".format(name))

  hello("Jenna", "Alice", "Christina")
```

Printing out to the console as follows:
```
How are you doing today, Jenna?
How are you doing today, Alice?
How are you doing today, Christina?
```

Naturally since \*args takes a variable number of positional arguments, arguments following a \*args parameter would have to be a keyword argument. You may however place as many positional arguments before \*args as you like.

```python
  # This is perfectly legal.

  def introduction(name, gender, *args):

      print("Hi my name is {} and I am a {}.".format(name, gender))
      print("I like "+", ".join(args)+".")

  introduction("Morgana", "female", "singing", "scrying", "acting")

```

Naturally, this prints out:
```
Hi my name is Morgana and I am a female.
I like singing, scrying, acting.
```
The args and kwargs indentifiers that follow the asterisk prepended \*args and \*\*kwargs are just that: identifiers. You can replaces the identifiers with any identifier you like `*koala` and `**pomelo` will work just as well as the original. When you needs to access the argument list later on, just use the identifier.

```python
  # For *utrecht the identifier will be the utrecht segment

  def sum(*utrecht):

    total = 0
    for value in utrecht:
      total+=value

    print(total)

  # The output is 9.
```

### So What About \*\*Kwargs?

\*\*Kwargs is similar to \*args but rather than positional arguments you can supply a variable number of keyword arguments instead. Think of the kw in **kw**args standing for keyword. The \*\*kwargs should come after all position arguments in a function call. When \*\*kwargs is the final parameter a dictionary will be received containing all passed arguments except for the those corresponding to previous parameters.

```python

  def order(item, **kwargs):

    print("Customer information: ")
    print("="*28)
    print("Item ordered: {}".format(item))
    keys = kwargs.keys()
    for key in keys:
      print("{} : {}".format(key, kwargs[key]))

    print("\r\n")
    print(kwargs)

  # item is a previously named formal parameter, and will not be passed to the **kwargs argument list.
  order(item="Gouda", Name="Claude", Age="17",  Pet="Red Sox")
```

Which prints out:
```
Customer information:
============================
Item ordered: Gouda
Name : Claude
Age : 17
Pet : Red Sox

{'Name': 'Claude', 'Age': '17', 'Pet': 'Red Sox'}
```

### In Conclusion

Both \*args and \*\*kwargs argument lists allow the coder to pass in an undefined number of arguments to a method/function call. The primary distinction between the two being that the tuple wrapped \*args argument list should receive positional parameters while the \*\*kwargs argument list should recieve keyword parameters. It is important to remember that the names args and kwargs are just identifiers as an arbitrary identifier such as \*paradox is perfectly valid as well.

I hope this helped anyone who was confused about this topic. When I first came across this subject it took me some time to actually find some explanation as to what it even meant to represent. So I hope this provided some needed information.
