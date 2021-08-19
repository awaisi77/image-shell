#!/bin/bash
echo "Hello World"
fswatch -o --event Updated .command_pipe | \
            xargs -n1 -I "{}"  .command_pipe >> .command_pipe_log


