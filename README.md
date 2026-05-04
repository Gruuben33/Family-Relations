# Family-Relations
class person has name, slot, gender, parentslot, and generation. Generation is not an input but calculated.  
people (  
John,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0, 1, null, 0  
Paul,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1, 1, 0, 1  
Cale,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2, 1, 0, 1  
Jess,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3, 1, 0, 1  
Martha,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4, 0, 1, 2  
Steve,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5, 1, 1, 2  
Jeff,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6, 1, 2, 2  
Mike,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7, 1, 2, 2  
Darth Vader,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8, 1, 2, 2  
Heck,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9, 0, 3, 2  
Perry,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10, 1, 3, 2  
Luke Skywalker,11, 1, 8, 3  
add more people  
)  

### Generation calculation  
find generation of parent and add 1 to find generation of new person.  

## Check lineage function  
inputs(person A, person B, which function)  
let start = null  
let end = null  
if person A gen < person B gen:  
&nbsp;start = person B  
&nbsp;end = person A  
else:  
&nbsp;start = person A  
&nbsp;end = person B  
return start, end  

## Check lineage function part 2
inputs(start, end, steps = [])  
let gendiff = start gen - end gen  
if gendiff == 0:  
&nbsp;if start parentslot == end parentslot:  
&nbsp;&nbsp;if start slot == end slot:  
&nbsp;&nbsp;&nbsp;steps.push(self)  
&nbsp;&nbsp;&nbsp;return steps  
&nbsp;&nbsp;else:  
&nbsp;&nbsp;&nbsp;steps.push(sibling)  
&nbsp;&nbsp;&nbsp;return steps  
&nbsp;else:  
&nbsp;&nbsp;steps.push(start gen)  
&nbsp;&nbsp;return steps  
else:  
&nbsp;steps.push(parent)  
&nbsp;return checklineage function part 2 (family[start parentslot], end, steps)  

## find cousin function
inputs(start, end, dict = {})  
if dict == {}: <empty dict>  
&nbsp;dict[0] = []  
&nbsp;dict[1] = []  
let gendiff = start gen - end gen  
if gendiff == 0:  
&nbsp;if start slot == end slot:  
&nbsp;&nbsp;return dict  
&nbsp;else:  
&nbsp;&nbsp;dict[0].append(start parentslot)  
&nbsp;&nbsp;dict[1].append(end parent slot)  
else:  
&nbsp;dict[0].append(start parentslot)  
return find cousin function (family[start parentslot], family[end parentslot], dict)  


## check relation function
inputs(steps)  
great = gendiff - 1  
last step = steps.length - 1
if steps[last step] == 1:  
&nbsp;if gendiff > 0:  
&nbsp;&nbsp;if gendiff > 1:  
&nbsp;&nbsp;&nbsp;message = `${start} is ${end}'s ${greats function (great)} grandparent`  
&nbsp;&nbsp;else:  
&nbsp;&nbsp;&nbsp;message = `${start} is ${end}'s parent`  
&nbsp;else:  
&nbsp;&nbsp;message = `${start} is ${end}`  
elif steps[last step] == 2:  
&nbsp;if gendiff > 0:  
&nbsp;&nbsp;message = `${start} is ${end}'s ${greats function (great)} uncle`  
&nbsp;else:  
&nbsp;&nbsp;message = `${start} is ${end}'s sibling`  
elif steps[last step] > 2:  
&nbsp;let lineage = cousin function(checkfamily relations(start, end))  
&nbsp;let distance = null  
&nbsp;let difference = null  
&nbsp;let removed = null
&nbsp;if lineage[0].length == 2:  
&nbsp;&nbsp;distance = "first"  
&nbsp;elif lineage[0].length == 3:  
&nbsp;&nbsp;distance = "second"  
&nbsp;elif lineage[0].length == 4:  
&nbsp;&nbsp;distance = "third"  
&nbsp;else:  
&nbsp;&nbsp;distance = "i don't count that high"  
&nbsp;let stepsdiff = lineage[0].length - lineage[1].length  
&nbsp;if stepsdiff > 0:  
&nbsp;&nbsp;removed = true  
&nbsp;&nbsp;if stepsdiff == 1:  
&nbsp;&nbsp;&nbsp;difference = "once"  
&nbsp;&nbsp;elif stepsdiff == 2:  
&nbsp;&nbsp;&nbsp;difference = "twice"  
&nbsp;&nbsp;elif stepsdiff == 3:  
&nbsp;&nbsp;&nbsp;difference = "thrice"  
&nbsp;&nbsp;else:  
&nbsp;&nbsp;&nbsp;difference = "i don't count that high"
&nbsp;if removed == true:  
&nbsp;&nbsp;message = `${start} is ${end's} ${distance} cousin ${difference} removed`  
&nbsp;else:  
&nbsp;&nbsp;message = `${start} is ${end's} ${distance} cousin`  


## greats function
inputs(# of greats, text = "")  
if # of greats == 0:  
&nbsp;return text  
else:  
&nbsp;return greats function (# of greats - 1, text)  


# main
let parent = 0  
let self = 1  
let sibling = 2  
cousin step will be the generation #  
family = [] empty array  
push the list of new people into array  
print the names of everyone (figure out a sensible way to present family tree)  
pick random between 0 and length of array twice, save person at array at random number to variables.  
let start = check lineage function[0]  
let end = checklineage function[1]  
let steps = check lineage function part 2  
let message = check relation function (steps)  
print message  