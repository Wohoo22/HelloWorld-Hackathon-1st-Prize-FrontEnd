import React from "react";
import { useParams } from "react-router-dom";

const Tutorial = () => {
  const { levelid } = useParams();

  return (
    <div className="Tutorial">
      {parseInt(levelid) === 1 && (
        <div>
          <p>
            The console is a panel that displays important messages, like
            errors, for developers. Much of the work the computer does with our
            code is invisible to us by default. If we want to see things appear
            on our screen, we can print, or log, to our console directly.
          </p>
          <p>
            In JavaScript, the console keyword refers to an object, a collection
            of data and actions, that we can use in our code. Keywords are words
            that are built into the JavaScript language, so the computer will
            recognize them and treats them specially.
          </p>
          <p>
            One action, or method, that is built into the console object is the
            .log() method. When we write console.log() what we put inside the
            parentheses will get printed, or logged, to the console.
          </p>

          <p>
            It’s going to be very useful for us to print values to the console,
            so we can see the work that we’re doing.
          </p>
        </div>
      )}
      {parseInt(levelid) === 2 && (
        <div>
          <p>
            Data types are the classifications we give to the different kinds of
            data that we use in programming. In JavaScript, there are seven
            fundamental data types:
          </p>

          <p>
            {" "}
            Number: Any number, including numbers with decimals: 4, 8, 1516,
            23.42. String: Any grouping of characters on your keyboard (letters,
            numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... '
            or double quotes " ... ". Though we prefer single quotes. Some
            people like to think of string as a fancy word for text. Boolean:
            This data type only has two possible values— either true or false
            (without quotes). It’s helpful to think of booleans as on and off
            switches or as the answers to a “yes” or “no” question. Null: This
            data type represents the intentional absence of a value, and is
            represented by the keyword null (without quotes). Undefined: This
            data type is denoted by the keyword undefined (without quotes). It
            also represents the absence of a value though it has a different use
            than null. Symbol: A newer feature to the language, symbols are
            unique identifiers, useful in more complex coding. No need to worry
            about these for now. Object: Collections of related data.
          </p>
          <p>
            The first 6 of those types are considered primitive data types. They
            are the most basic data types in the language. Objects are more
            complex, and you’ll learn much more about them as you progress
            through JavaScript. At first, seven types may not seem like that
            many, but soon you’ll observe the world opens with possibilities
            once you start leveraging each one. As you learn more about objects,
            you’ll be able to create complex collections of data.
          </p>
        </div>
      )}
      {parseInt(levelid) === 3 && (
        <div>
          <p>
            The for statement creates a loop that consists of three optional
            expressions, enclosed in parentheses and separated by semicolons,
            followed by a statement (usually a block statement) to be executed
            in the loop.
          </p>
          <p>
            The following for statement starts by declaring the variable i and
            initializing it to 0. It checks that i is less than nine, performs
            the two succeeding statements, and increments i by 1 after each pass
            through the loop.
          </p>
        </div>
      )}
      {parseInt(levelid) === 4 && (
        <div>
          <p>
            Arrays are list-like objects whose prototype has methods to perform
            traversal and mutation operations. Neither the length of a
            JavaScript array nor the types of its elements are fixed. Since an
            array's length can change at any time, and data can be stored at
            non-contiguous locations in the array, JavaScript arrays are not
            guaranteed to be dense; this depends on how the programmer chooses
            to use them. In general, these are convenient characteristics; but
            if these features are not desirable for your particular use, you
            might consider using typed arrays.
          </p>
          <p>
            Arrays cannot use strings as element indexes (as in an associative
            array) but must use integers. Setting or accessing via non-integers
            using bracket notation (or dot notation) will not set or retrieve an
            element from the array list itself, but will set or access a
            variable associated with that array's object property collection.
            The array's object properties and list of array elements are
            separate, and the array's traversal and mutation operations cannot
            be applied to these named properties.
          </p>
        </div>
      )}
      {parseInt(levelid) === 5 && (
        <div>
          <p>
            Functions are one of the fundamental building blocks in JavaScript.
            A function in JavaScript is similar to a procedure—a set of
            statements that performs a task or calculates a value, but for a
            procedure to qualify as a function, it should take some input and
            return an output where there is some obvious relationship between
            the input and the output. To use a function, you must define it
            somewhere in the scope from which you wish to call it.
          </p>
        </div>
      )}
      {parseInt(levelid) === 6 && (
        <div>
          <p>
            A switch statement first evaluates its expression. It then looks for
            the first case clause whose expression evaluates to the same value
            as the result of the input expression (using the strict comparison,
            ===) and transfers control to that clause, executing the associated
            statements. (If multiple cases match the provided value, the first
            case that matches is selected, even if the cases are not equal to
            each other.)
          </p>
          <p>
            If no matching case clause is found, the program looks for the
            optional default clause, and if found, transfers control to that
            clause, executing the associated statements. If no default clause is
            found, the program continues execution at the statement following
            the end of switch. By convention, the default clause is the last
            clause, but it does not need to be so.
          </p>
          <p>
            The optional break statement associated with each case label ensures
            that the program breaks out of switch once the matched statement is
            executed and continues execution at the statement following switch.
            If break is omitted, the program continues execution at the next
            statement in the switch statement. The break statement is not
            required if a return statement precedes it.
          </p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
