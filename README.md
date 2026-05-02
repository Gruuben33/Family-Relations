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
inputs(person A, person B)  
let start = null  
let end = null  
if person A gen < person B gen:  
&nbsp;start = person B  
&nbsp;end = person A  
else:  
&nbsp;start = person A  
&nbsp;end = person B  
return check lineage function part 2 (start, end)  

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


# main
parent = 0  
self = 1  
sibling = 2  
cousin step will be the generation #
steps = [] empty array
family = [] empty array
push the list of new people into array  
print the names of everyone (figure out a sensible way to present family tree)  
pick random between 0 and length of array twice, save person at array at random number to variables. Check lineage function  
print results  