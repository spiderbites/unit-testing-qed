# Unit Testing Workshop for TWG QAs

```
             ____________________________________________________
            /                                                    \
           |    _____________________________________________     |
           |   |                                             |    |
           |   |  C:\> q.e.d. _                              |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |                                             |    |
           |   |_____________________________________________|    |
           |                                                      |
            \_____________________________________________________/
                   \_______________________________________/
                _______________________________________________
             _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- `-_
          _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.`-_
       _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`__`. .-.-.-.`-_
    _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.`-_
 _-'.-.-.-.-.-. .---.-. .-----------------------------. .-.---. .---.-.-.-.`-_
:-----------------------------------------------------------------------------:
`---._.-----------------------------------------------------------------._.---'
```

### Installation

Ensure you have Node version >= 6 installed

```bash
> node --v
v6.0.0 # at least 6.0.0 is required
```

Ensure you have a javascript package manager such as `npm` or `yarn` installed.

The version numbers don't matter so much, just ensure that you have something installed.
```bash
> npm -v
5.5.1
> yarn -v
1.3.2
```

Once that's out of the way, install the application specific dependencies and run the application.  You can use either `npm` or `yarn` to run these commands.  I'll use yarn.

```bash
> yarn install
```

To start the application:

```bash
> yarn start
```

Navigate to [http://localhost:8080](http://localhost:8080) in your browser.


### Get JP to the Balloon

The point of this simple game is to get JP to the balloon.  The game works pretty well, but there's also a bug or two.

Your job is to complete the unit tests in the `functions.test.js` file and to make any necessary changes to the code in the `functions.js` file so that all those tests pass.

You can find those files here:

```
/app
  functions.js
  functions.test.js
```

Run the tests now and check the output in the console.
```bash
> yarn test
```

You may find it useful to have `jest`, the test framework we are using, "watch" your code and continually run your tests as you make changes (you can press `q` to quit at any time):

```bash
> yarn test-watch // or npm run test-watch
```

You'll notice that the unimplemented tests start with `it.skip`. You'll want to remove the `.skip` part as you complete each test.

