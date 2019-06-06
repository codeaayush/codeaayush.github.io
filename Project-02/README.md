# Learn Git

Learning git commands from basics 
  - Type some Markdown on the left
  - See HTML in the right
  - Magic

### Linux basic commands 

Dillinger uses a number of open source projects to work properly:

* [pwd] -  In this we get the present working directory name where we are working.
* [ls] [ls ~]- It give the all files name on the directory. 
* [ls /] - It will show all the contents of the root directory.
* [ls ..] - It is used to get one folder directory back.
* [ls ../..] - It takes you at two folders back directory.
* [ls -a] - It shows all the files and the hidden files on the directory where we are working now.
* [ls -l] - It give all the details of a file with long discription like time,date ,size ,mod etc..
* [ls -al] - It is the combination (ls-a) and (ls-l) it works to give all the hidden files with all its discription.
* [ls -lS] - It is used to get the information in sorting manner w.r.t file size.
* [ls folder-name /] - It shows all the files and folders in the folder which we are giving.
* [ls folder-name/*.html] - It searches all files with a extension of .html in the folder.
* [ls folder-name/*.*] - It shows all the files in the folder
* [cd ..] -It is used to get the change in directory one folder above.
* [cd ~] - It is used to move to the home directory.
* [cd /] - It is used to get at the root directorty of the the user.
* [cd dir] - It is used to cahnge in the directory.
* [cd] - It is used to move at the home directory.
* [cat file-name.extension] - It is used to get the inside information of a file means -what is written in a file.
* [cat file1.ext file2.ext] - It showing the data of two or more files.
* [cat -b file.ext]- It is used to giving the number to the line on a file ,in this we dont give the number to the blank line.
* [cat -n file.txt] - It is used to give the number to every line include the blank line also.
* [cat -s file.ext] - It is used to see the file only in one gap if the file has multiple gaps .it will change in the showing ,it will not change in the actual file.
* [cat -E file.ext] - It is Used to see the end of a line.It will put ($) at the end of a every line.
* [cat > file.ext] - It is used to change the data in a file what we written ,it directly change into a file.In this the old data is lost.
* [cat >> file.ext] - In this we are appending the data.
* [cat file1.ext file2.ext > neworexistencefile.ext] - It is used to join or concate two files of a data into a another file. 
* [mkdir dir] - It is used to create a folder in a directory where we are working now.
* [rmdir] - It is used to remove a directory which is already exist, it is just like it will delete the file and folder in the current working page.
* [cp filename] - It is used to copy the data of a one file into a another file.
* [mv file.exp destination] - It is used to move the files and folder or change the name.
* [touch] - It is used to create a file.

### Commands for Git bash

Dillinger uses a number of open source projects to work properly:

* [git init Project-Name] - In this we give the new name of the repository and the new repository has made in a git server.
* [git statuts] - It will show and give the information of the currently working branch for ex-master branch.
* [git add . ] - In this the all the files are now commit , before this if we use git status it shows it is untrack file.Now the file is in the status area of a git.
* [git coomit -m "Message"] - In this the file is in commit section and we dont apply git reset in it.
* [git reset] - It is to come back at the untrack path after the add, if we want to do ,it will again a untrack file and it can only be done after add not after commit.
* [git push] - It is used to push the file when we can made changes in it.In this we can give back our new data to a github repository.
* [git pull] - It is used when the one time the person can access the data by clone then after it can be acess by pull command.The pull command is used to access the data from github repository.
* [git clone] - It is used when the new person can access the data then first he will clone the data, after that he will push the file and after he will only use pull command.

