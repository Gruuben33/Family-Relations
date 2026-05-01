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
### Position calculation  
find generation of parent and add 1 to find generation of new person.  

## Check lineage function  
inputs(person A, person B)  
let gen1 = person A generation  
let gen2 = person B generation  
let parent1 = person A parentslot  
let parent2 = person B parentslot  
let gendiff = gen1 - gen2  

###### Person A is later generation  
if gendiff > 0  
{possible relations are child, nephew/niece, great ... nephew/niece, grandchild, great ... grandchild}  
&nbsp;if gendiff == -1  
&nbsp;{possible relations are child, nephew/niece}  
&nbsp;&nbsp;if parent1 == person B name  
&nbsp;&nbsp;return {relation is child}  
&nbsp;&nbsp;else  
&nbsp;&nbsp;&nbsp;if person A gender == 0  
&nbsp;&nbsp;&nbsp;return {relation is niece}  
&nbsp;&nbsp;&nbsp;else  
&nbsp;&nbsp;&nbsp;return {relation is nephew}  
&nbsp;else  
&nbsp;&nbsp;if (expand)
&nbsp;{possible relations are grandchild, great ... grandchild}  
&nbsp;return {relation is (# of greats = -gendiff - 2) grandchild}  

###### Person A is earlier generation  
else if gendiff < 0  
{possible relations are parent, uncle/aunt, great ... uncle/aunt, grandparent, great ... grandparent}  
&nbsp;if gendiff == 1  
&nbsp;{possible relations are parent, uncle/aunt}  
&nbsp;&nbsp;if parent2 == person A name  
&nbsp;&nbsp;return {relation is parent}  
&nbsp;&nbsp;else  
&nbsp;&nbsp;&nbsp;if person B gender == 0  
&nbsp;&nbsp;&nbsp;return {relation is aunt}  
&nbsp;&nbsp;&nbsp;else  
&nbsp;&nbsp;&nbsp;return {relation is uncle}  
&nbsp;else  
&nbsp;&nbsp;if person after going back generations from person A by the gendiff == person B  
&nbsp;&nbsp;{possible relations are uncle/aunt, great ... uncle/aunt} 
&nbsp;&nbsp;&nbsp;if person B gender == 0
&nbsp;&nbsp;&nbsp;&nbsp;return {relation is (# of great = gendiff - 2) aunt}  
&nbsp;&nbsp;&nbsp;else  
&nbsp;&nbsp;&nbsp;&nbsp;return {relation is (# of great = gendiff - 2) uncle}  
&nbsp;&nbsp;else  
&nbsp;&nbsp;&nbsp;{possible relations are grandparent, great ... grandparent}  
&nbsp;&nbsp;&nbsp;return {relation is (# of great = gendiff - 2) grandparent}  

###### Same generation  
else if gendiff == 0  
{possible relations are sibling, cousin, self}  
&nbsp;if parent1 == parent2  
&nbsp;{possible relations are sibling, self}  
&nbsp;&nbsp;if person A name == person B name  
&nbsp;&nbsp;return {relation is self}  
&nbsp;&nbsp;else  
&nbsp;&nbsp;return {relation is sibling}  
&nbsp;else  
&nbsp;return {relation is cousin}  


# main  
create empty array  
push the list of new people into array  
print the names of everyone (figure out a sensible way to present family tree)  
pick random between 0 and length of array twice, save person at array at random number to variables. Check lineage function  
print results  