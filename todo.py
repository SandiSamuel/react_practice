import datetime
import time


class ToDo(object):
    """
    Simple class to model a To-Do item
    """
    def __init__(self, task):
        self._task = task
        self._done = False
        self.updated = datetime.datetime.now()

    def gettask(self):
        return self._task

    def settask(self, value):
        self._task = value
        self.updated = datetime.datetime.now()

    task = property(gettask, settask)

    def getdone(self):
        return self._done

    def setdone(self, value):
        self._done = value
        self.updated = datetime.datetime.now()

    done = property(getdone, setdone)

    def toDict(self):
        return {"task": self.task, "done": self.done, "updated": time.mktime(self.updated.timetuple())}
