for name in *.md
do
    sed "s/<!-- more -->/<!--more-->/" $name -i
done
