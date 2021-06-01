## Node Version Manager (NVM)
- To find out which version of node your machine is currently running, use the command `node -v` in your terminal
- We want to build our projects in the latest stable build that is supported by all of our dependencies.
- For easy node version management, we'll use the [Node Version Manager](https://github.com/nvm-sh/nvm)
  
### Installation and Config
We can use homebrew to install the manager:
1. update homebrew with `brew update`
2. install the manager with `brew install nvm`
3. make a directory for the manger in your root folder with `mkdir ~/.nvm`
4. in your `~/.zshrc` file for zsh users or in your `.bash_profile` for bash users, add the following:
